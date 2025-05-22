import { useState, useEffect } from "react";
import api from "../service/api";

function Education() {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const { data } = await api.get("course-module");
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {console.log(data)}
      {data &&
        data.length > 0 &&
        data.map((course) => (
          <div
            key={course.id}
            className="border-[#2964c2] p-2.5 rounded-2xl shadow-[0_2px_4px_#2964c21a,-1px_6px_6px_#2964c217,-3px_14px_9px_#2964c20d,-5px_25px_10px_#2964c203,-8px_39px_11px_#2964c200]
            border mb-2 overflow-hidden bg-white"
          >
            <div>
              <div className="flex items-center justify-between p-3">
                <span className="font-semibold text-[20px] text-[#2964c2]">
                  {course.title}
                </span>
              </div>
              <div className="p-3">
                {course.lessons &&
                  course.lessons
                    .map((lesson) => (
                      <div
                        key={lesson.id}
                        className="border-[#2964c2] p-2.5 rounded-2xl shadow-[0_2px_4px_#2964c21a,-1px_6px_6px_#2964c217,-3px_14px_9px_#2964c20d,-5px_25px_10px_#2964c203,-8px_39px_11px_#2964c200]
            border mb-2 overflow-hidden bg-white"
                      >
                        <div className="flex items-center justify-between p-3">
                          <span className="font-semibold text-[20px] text-[#2964c2]">
                            {lesson.title}
                          </span>
                        </div>
                      </div>
                    ))
                    .reverse()}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Education;
