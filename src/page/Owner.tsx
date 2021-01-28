import React, { useEffect, useState } from "react";

interface Type {
  name: string;
  id: number;
}

const data: Type[] = [
  { name: "돼지곱창집", id: 111111 },
  { name: "소고기국밥집", id: 222222 },
  { name: "짜장면집", id: 333333 },
  { name: "볶음밥집", id: 444444 },
];

interface BaseProps {
  triger: () => void;
}

export default function Owner({ triger }: BaseProps): React.ReactElement {
  const [storeId, setStoreId] = useState<number>(
    Number(localStorage.getItem("STORE_ID"))
  );
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStoreId(Number(e.target.value));
    triger();
  };

  useEffect(() => {
    localStorage.setItem("STORE_ID", storeId.toString());
  }, [storeId]);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
      <div>
        <select
          value={storeId}
          onChange={(e) => {
            onChange(e);
          }}
        >
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
