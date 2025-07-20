from fastapi import APIRouter
from fastapi import Query
from backend.queries.accident_queries import (
    get_total_accident_count,
    most_common_weather_conditions,
    number_of_fatal_accidents,
    accident_by_day,
    accident_by_date,
    get_heatmap_by_bounds,
    get_road_conditions,
)

router = APIRouter()


@router.get("/api/total_accidents")
async def total_accidents():
    count = await get_total_accident_count()
    return {"total_accidents": count}


@router.get("/api/weather")
async def likely_Weather_conditions():
    weather = await most_common_weather_conditions()
    return {"MostCommonWeather": weather}


@router.get("/api/fatal_accidents")
async def fatal_accidents():
    total = await number_of_fatal_accidents()
    return {"totalFatalAccidents": total}


@router.get("/api/accident_by_day")
async def number_of_accidents_by_day():
    accidents_by_day = await accident_by_day()
    return accidents_by_day


@router.get("/api/monthly_trend")
async def monthly_trend():
    accidents_by_data = await accident_by_date()
    return accidents_by_data


@router.get("/api/heat_map")
async def heat_map(
    south: float = Query(...),
    north: float = Query(...),
    west: float = Query(...),
    east: float = Query(...),
):
    return await get_heatmap_by_bounds(south, north, west, east)


@router.get("/api/road_conditions")
async def road_conditions():
    road_conditions_data = await get_road_conditions()
    return road_conditions_data
