import React, { useState, useEffect } from 'react';

const Information = () => {
  const [formData, setFormData] = useState(null);
  const [tempData, setTempData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://testpsyedu.limsa.uz/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 204) {
          console.warn("204: Ma'lumotlar mavjud emas");
          setFormData({});
          setTempData({});
          return;
        }

        const data = await response.json();
        const user = data?.user || data;

        const mappedData = {
          id: user.id || '',
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          middleName: user.middleName || '',
          phone: user.phone || '',
          region: user.region || '',
          district: user.district || '',
          school: user.school || '',
        };

        setFormData(mappedData);
        setTempData(mappedData);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleEdit = () => {
    setTempData(formData);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempData(formData);
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      const payload = {
        id: formData.id,
        ...tempData,
      };

      const response = await fetch('https://testpsyedu.limsa.uz/users/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormData(tempData);
        setIsEditing(false);
      } else {
        console.error('Saqlashda xatolik:', await response.text());
      }
    } catch (error) {
      console.error("Saqlashda xatolik:", error);
    }
  };

  if (loading || !formData) {
    return <div className="text-center py-10 text-[#2964c2]">Yuklanmoqda...</div>;
  }

  if (Object.keys(formData).length === 0) {
    return <div className="text-center py-10 text-[#ff4d4f]">Ma'lumotlar topilmadi</div>;
  }

  return (
    <section className='lg:sticky lg:top-0'>
      <div>
        <h2 className="font-bold text-[#2964c2] mt-4 mb-6 text-4xl bg-gradient-to-r from-[#2964c2] to-[#3a7bd5] bg-clip-text text-transparent">
          Shaxsiy ma'lumotlarim
        </h2>
      </div>

      <div className="border border-[#2964c2]/20 rounded-2xl py-8 px-6 mb-10 bg-white shadow-xl backdrop-blur-sm bg-white/90">
        <div className="flex flex-col items-center">
          <div className="mb-3 rounded-full shadow-lg" tabIndex="0">
            <img
              width="122"
              height="122"
              alt="person icon"
              className="rounded-full border-4 border-[#2964c2]/10 transition-transform duration-300 hover:scale-110"
              src="https://psyedu-for-student.vercel.app/user.svg"
            />
          </div>
          <h3 className="mb-6 text-center font-bold text-[#2964c2] text-2xl transition-transform duration-300 hover:scale-110">
            {formData.lastName} {formData.firstName} {formData.middleName}
          </h3>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2964c2] to-transparent mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ label: "Familiya", name: "lastName" },
            { label: "Ism", name: "firstName" },
            { label: "Otasining ismi", name: "middleName" },
            { label: "Telefon raqam", name: "phone" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm font-semibold text-[#2964c2] mb-1 block">{field.label}</label>
              <input
                name={field.name}
                disabled={!isEditing}
                className="mt-1 block w-full px-4 py-3 border border-[#2964c2]/30 rounded-xl transition-all duration-200 disabled:bg-[#f5f9ff]"
                type="text"
                value={isEditing ? tempData[field.name] : formData[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div>
            <label className="text-sm font-semibold text-[#2964c2] mb-1 block">Viloyat</label>
            {isEditing ? (
              <input
                name="region"
                className="mt-1 block w-full px-4 py-3 border border-[#2964c2]/30 rounded-xl"
                type="text"
                value={tempData.region}
                onChange={handleChange}
              />
            ) : (
              <span className="mt-1 block w-full px-4 py-3 border border-[#2964c2]/20 rounded-xl bg-[#f5f9ff]">
                {formData.region}
              </span>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-[#2964c2] mb-1 block">Shahar/tuman</label>
            <input
              name="district"
              disabled={!isEditing}
              className="mt-1 block w-full px-4 py-3 border border-[#2964c2]/30 rounded-xl transition-all duration-200 disabled:bg-[#f5f9ff]"
              type="text"
              value={isEditing ? tempData.district : formData.district}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-[#2964c2] mb-1 block">Maktab nomi</label>
            <input
              name="school"
              disabled={!isEditing}
              className="mt-1 block w-full px-4 py-3 border border-[#2964c2]/30 rounded-xl transition-all duration-200 disabled:bg-[#f5f9ff]"
              type="text"
              value={isEditing ? tempData.school : formData.school}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2.5 rounded-xl font-semibold shadow-md"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-[#2964c2] to-[#3a7bd5] hover:from-[#2d6dd6] hover:to-[#4a8aec] text-white px-6 py-2.5 rounded-xl font-semibold shadow-md"
              >
                Saqlash
              </button>
            </>
          ) : (
            <button
              onClick={handleToggleEdit}
              className="bg-gradient-to-r from-[#2964c2] to-[#3a7bd5] hover:from-[#2d6dd6] hover:to-[#4a8aec] text-white px-6 py-2.5 rounded-xl font-semibold shadow-md"
            >
              Tahrirlash
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Information;
