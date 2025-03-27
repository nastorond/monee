"use client";
import React, { useEffect, useRef, useState } from "react";

interface DetailsData {
  date: number;
  description: string;
  amount: number;
}

interface DetailsProps {
  type: string;
  size: number;
  data: DetailsData[];
  setData: React.Dispatch<React.SetStateAction<DetailsData[]>>;
}

const Details: React.FC<DetailsProps> = ({ type, size, data, setData }) => {
  ////////////입력값 관련////////////////
  // 입력값
  const [newDetails, setNewDetails] = useState<DetailsData>({
    date: 0,
    description: "",
    amount: 0,
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDetails((prev) => ({
      ...prev,
      [name]: name === "date" || name === "amount" ? value.replace(/[^0-9]/g, "") : value
    }));
  };

  // 입력값 변경 핸들러 + Enter 키 감지
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      editIndex == null ? handleAdd():handleUpdate();
    }
  };

  
  ////////////컨텍스트 메뉴/////////////
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; index: number } | null>(null);

  // 행 우클릭 이벤트 핸들러
  const handleContextMenu = (e: React.MouseEvent, index: number) => {
    e.preventDefault(); // 기본 우클릭 메뉴 비활성화
    setContextMenu({ x: e.clientX, y: e.clientY, index });
  };

  // 다른 곳 클릭 시 컨텍스트 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);


  ////////////데이터 추가//////////////
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleAdd = () => {
    // 빈 데이터가 있을 경우
    if (!newDetails.date || !newDetails.description || !newDetails.amount) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    // 오류 - date
    if (Number(newDetails.date) < 1 || Number(newDetails.date)  > 31) {
      alert("날짜는 1부터 31 사이의 숫자여야 합니다.");
      return;
    }

    // 성공 - 데이터 전송 후 초기화
    if (newDetails.date && newDetails.description && newDetails.amount) {
      setData((prevData) => [...prevData, { 
        date: Number(newDetails.date), 
        description: newDetails.description, 
        amount: Number(newDetails.amount) 
      }]);

      setNewDetails({ date: 0, description: "", amount: 0 });

      // 스크롤 내리기
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 100);
    }
  };



  ////////////데이터 수정//////////////
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    const item = data[index];
    setNewDetails(item);
    setEditIndex(index);
    setContextMenu(null);
  };
  
  
  const handleUpdate = () => {
    // 빈 데이터가 있을 경우
    if (!newDetails.date || !newDetails.description || !newDetails.amount) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    // 오류 - date
    if (Number(newDetails.date) < 1 || Number(newDetails.date)  > 31) {
      alert("날짜는 1부터 31 사이의 숫자여야 합니다.");
      return;
    }

    setData((prevData) =>
      prevData.map((item, i) => (i === editIndex ? { 
        date: Number(newDetails.date), 
        description: newDetails.description, 
        amount: Number(newDetails.amount) 
      } : item))
    );

    setEditIndex(null);
    setNewDetails({ date: 0, description: "", amount: 0 });
  };

  ////////////데이터 삭제//////////////
  const handleDelete = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
    setEditIndex(null);
    setNewDetails({ date: 0, description: "", amount: 0 });
  };

  ///////////입력 값 초기화/////////////
  const handleReset = () => {
    setEditIndex(null);
    setNewDetails({ date: 0, description: "", amount: 0 });
  };

  return (
    <div className="w-full">
      <div className="m-0 p-0 overflow-hidden rounded-md border border-[#919191]">
        
        <table className="w-full border-collapse overflow-hidden">
          <thead className="bg-[#F8E08E] border-b border-[#919191]">
            <tr>
              <th className="px-3 py-1 text-xs lg:text-sm font-semibold whitespace-nowrap w-[20%]">날 짜</th>
              <th className="px-3 py-1 text-xs lg:text-sm font-semibold whitespace-nowrap w-[50%]">상세 내역</th>
              <th className="px-3 py-1 text-xs lg:text-sm font-semibold whitespace-nowrap w-[30%]">금 액</th>
            </tr>
          </thead>
        </table>
        
        <div
          ref={scrollRef}  
          className="m-0 p-0 overflow-y-scroll scrollbar-thin"
          style={{ minHeight: `${size}px`, maxHeight: `${size}px` }}
        >
        <table className="w-full border-collapse overflow-hidden rounded-lg">
          <tbody >          
            {data.map((details, index) => (
              <tr
                key={index}
                onContextMenu={(e) => handleContextMenu(e, index)}
                className={`transition border-b border-[#919191] 
                  ${editIndex === index ? "bg-[#F8E08E]" : "hover:bg-[#F9F5EA]"} 
                `}
              >
                <td className=" px-3 py-1 text-xs lg:text-sm font-normal text-center whitespace-nowrap w-[20%]">{details.date}일</td>
                <td className=" px-3 py-1 text-xs lg:text-sm font-normal text-center whitespace-nowrap w-[50%]">{details.description}</td>
                <td className=" px-3 py-1 text-xs lg:text-sm font-normal text-right whitespace-nowrap w-[30%]">{details.amount.toLocaleString()}원</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 컨텍스트 메뉴 (우클릭 시 표시) */}
      {contextMenu && (
        <div
          className="absolute bg-white border border-gray-300 rounded-md shadow-md text-xs lg:text-sm"
          style={{ top: contextMenu.y, left: contextMenu.x, zIndex: 50 }}
        >
          <button
            onClick={() => handleEdit(contextMenu.index)}
            className="block w-full pl-3 pr-4 py-1 text-center hover:bg-gray-200"
          >
            ✏️ 수정
          </button>
          <button
            onClick={() => handleDelete(contextMenu.index)}
            className="block w-full pl-3 pr-4 py-1 text-center hover:bg-gray-200"
          >
            ✖️ 삭제
          </button>
        </div>
      )}

      {/* 새로운 데이터 입력 필드 + 전송 버튼 */}
      <div className="flex items-center">
        <div className="w-full border border-[#919191] rounded-md p-0 mx-0 my-1 ">
          <input
            type="text"
            name="date"
            value={newDetails.date || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-[20%] px-2 py-1 text-xs lg:text-sm  text-center focus:outline-none"
            placeholder="날짜"
          />
          <input
            type="text"
            name="description"
            value={newDetails.description}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-[50%] px-2 py-1 text-xs lg:text-sm  text-center border-l border-r border-[#919191] focus:outline-none"
            placeholder="상세 내용"
            maxLength={10}
          />
          <input
            type="text"
            name="amount"
            value={newDetails.amount || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-[30%] px-2 py-1 text-xs lg:text-sm  text-right focus:outline-none"
            placeholder="금액"
          />
        </div>
        <button
            onClick={editIndex == null ? handleAdd:handleUpdate}
            className="ml-[3px] px-[4px] p-[0px] font-black text-[#F8FAFC] text-xl bg-[#F8E08E] border border-[#919191] rounded-md hover:bg-[#D9D9D9] transition"
        >
          ＋
        </button>
        <button
            onClick={handleReset}
            className="ml-[3px] px-[4px] p-[0px] font-black text-[#F8FAFC] text-xl bg-[#F8E08E] border border-[#919191] rounded-md hover:bg-[#D9D9D9] transition"
        >
         ×
        </button>
      </div>
    </div>
  );
};

export default Details;
