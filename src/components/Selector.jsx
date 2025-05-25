import { Select } from "antd";
import { useEffect, useState } from "react";
import api from "../service/api";

const { Option } = Select;

export default function RegionSelector({
  selected,
  setSelected,
  regionErr,
  setRegionErr,
}) {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    api.get("region").then((res) => setRegions(res.data.data));
  }, []);

  return (
    <div className="max-w-sm">
      <Select
        showSearch
        allowClear
        placeholder="Hududni tanlang"
        status={regionErr && "error"}
        value={selected}
        onChange={(value) => {
          setSelected(value);
          setRegionErr(false);
        }}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        className="!bg-red-200 w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
        style={{ width: "100%" }}
      >
        {regions.map((region) => (
          <Option key={region.id} value={region.id}>
            {region.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
