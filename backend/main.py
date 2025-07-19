from fastapi import FastAPI
from backend.db.database import database
from backend.db.models import accidents
from backend.routers.accidents import router as accident_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or specify "http://localhost:5173" if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/accidents")
async def get_accidents():
    query = accidents.select().limit(10)
    return await database.fetch_all(query)


app.include_router(accident_router)
