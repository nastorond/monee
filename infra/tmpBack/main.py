from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


tmpDatas = [
  {
    "date": "2025-04-01",
    "description": "월급",
    "amount": 2500000,
    "category": "수입"
  },
  {
    "date": "2025-04-01",
    "description": "넷플릭스",
    "amount": 14500,
    "category": "고정 지출"
  },
  {
    "date": "2025-04-01",
    "description": "아침 샌드위치",
    "amount": 5200,
    "category": "식비"
  },
  {
    "date": "2025-04-02",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-03",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-04",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-05",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-06",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-07",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-07",
    "description": "술자리",
    "amount": 30700,
    "category": "유흥"
  },
  {
    "date": "2025-04-08",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-09",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-10",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-10",
    "description": "보험료",
    "amount": 120000,
    "category": "고정 지출"
  },
  {
    "date": "2025-04-11",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-12",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-13",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-14",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-14",
    "description": "술자리",
    "amount": 31400,
    "category": "유흥"
  },
  {
    "date": "2025-04-15",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-15",
    "description": "펀드 투자",
    "amount": 200000,
    "category": "저축"
  },
  {
    "date": "2025-04-16",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-17",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-18",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-19",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-20",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-20",
    "description": "보험료",
    "amount": 120000,
    "category": "고정 지출"
  },
  {
    "date": "2025-04-21",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-21",
    "description": "술자리",
    "amount": 32100,
    "category": "유흥"
  },
  {
    "date": "2025-04-22",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-23",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-24",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-25",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-25",
    "description": "용돈",
    "amount": 100000,
    "category": "수입"
  },
  {
    "date": "2025-04-26",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-27",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-04-28",
    "description": "편의점",
    "amount": 5000,
    "category": "식비"
  },
  {
    "date": "2025-04-28",
    "description": "술자리",
    "amount": 32800,
    "category": "유흥"
  },
  {
    "date": "2025-04-29",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-04-30",
    "description": "편의점",
    "amount": 4500,
    "category": "식비"
  },
  {
    "date": "2025-05-01",
    "description": "월급",
    "amount": 2500000,
    "category": "수입"
  },
  {
    "date": "2025-05-01",
    "description": "넷플릭스",
    "amount": 14500,
    "category": "고정 지출"
  },
  {
    "date": "2025-05-02",
    "description": "편의점",
    "amount": 5100,
    "category": "식비"
  },
  {
    "date": "2025-05-03",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-05-04",
    "description": "편의점",
    "amount": 4300,
    "category": "식비"
  },
  {
    "date": "2025-05-05",
    "description": "편의점",
    "amount": 4700,
    "category": "식비"
  },
  {
    "date": "2025-05-05",
    "description": "가족 외식",
    "amount": 70000,
    "category": "식비"
  },
  {
    "date": "2025-05-06",
    "description": "편의점",
    "amount": 5100,
    "category": "식비"
  },
  {
    "date": "2025-05-07",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-05-07",
    "description": "도서 구매",
    "amount": 18000,
    "category": "교육"
  },
  {
    "date": "2025-05-08",
    "description": "편의점",
    "amount": 4300,
    "category": "식비"
  },
  {
    "date": "2025-05-08",
    "description": "어버이날 선물",
    "amount": 50000,
    "category": "기타"
  },
  {
    "date": "2025-05-09",
    "description": "편의점",
    "amount": 4700,
    "category": "식비"
  },
  {
    "date": "2025-05-10",
    "description": "편의점",
    "amount": 5100,
    "category": "식비"
  },
  {
    "date": "2025-05-11",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-05-12",
    "description": "편의점",
    "amount": 4300,
    "category": "식비"
  },
  {
    "date": "2025-05-12",
    "description": "가족 외식",
    "amount": 70000,
    "category": "식비"
  },
  {
    "date": "2025-05-13",
    "description": "편의점",
    "amount": 4700,
    "category": "식비"
  },
  {
    "date": "2025-05-14",
    "description": "편의점",
    "amount": 5100,
    "category": "식비"
  },
  {
    "date": "2025-05-15",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-05-16",
    "description": "편의점",
    "amount": 4300,
    "category": "식비"
  },
  {
    "date": "2025-05-17",
    "description": "편의점",
    "amount": 4700,
    "category": "식비"
  },
  {
    "date": "2025-05-18",
    "description": "편의점",
    "amount": 5100,
    "category": "식비"
  },
  {
    "date": "2025-05-19",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-05-19",
    "description": "가족 외식",
    "amount": 70000,
    "category": "식비"
  },
  {
    "date": "2025-05-20",
    "description": "편의점",
    "amount": 4300,
    "category": "식비"
  },
  {
    "date": "2025-05-21",
    "description": "편의점",
    "amount": 4700,
    "category": "식비"
  },
  {
    "date": "2025-05-21",
    "description": "도서 구매",
    "amount": 18000,
    "category": "교육"
  },
  {
    "date": "2025-05-22",
    "description": "편의점",
    "amount": 5100,
    "category": "식비"
  },
  {
    "date": "2025-05-23",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-05-24",
    "description": "편의점",
    "amount": 4300,
    "category": "식비"
  },
  {
    "date": "2025-05-25",
    "description": "편의점",
    "amount": 4700,
    "category": "식비"
  },
  {
    "date": "2025-05-26",
    "description": "편의점",
    "amount": 5100,
    "category": "식비"
  },
  {
    "date": "2025-05-27",
    "description": "편의점",
    "amount": 5500,
    "category": "식비"
  },
  {
    "date": "2025-05-28",
    "description": "편의점",
    "amount": 4300,
    "category": "식비"
  }
]
@app.get("/api/history/getDetail")
async def getDetail(date: str):
    result = tmpDatas
    return JSONResponse(
        content=result, 
        media_type="application/json; charset=utf-8"
        )

@app.get("/{full_path:path}")
async def catch_all(full_path: str):
    return JSONResponse(
        content={"message": "Not Found"}, 
        status_code=404
        )