from ..db.database import database


async def get_total_accident_count():
    query = "SELECT COUNT(*) FROM accidents"
    result = await database.fetch_one(query=query)
    return result[0] if result else 0


async def most_common_weather_conditions():
    query = "SELECT weather_conditions, COUNT(*) AS frequency FROM accidents GROUP BY weather_conditions ORDER BY frequency DESC LIMIT 1"
    result = await database.fetch_one(query=query)
    return result[0] if result else "No weather conditions data"


async def number_of_fatal_accidents():
    query = "SELECT COUNT(*) FROM accidents WHERE accident_severity = 'Fatal'"
    result = await database.fetch_one(query=query)
    return result[0] if result else "no fatal accidents"


async def accident_by_day():
    query = " SELECT day_of_week, COUNT(*) as total FROM accidents GROUP BY day_of_week ORDER BY CASE day_of_week  WHEN 'Monday' THEN 1 WHEN 'Tuesday' THEN 2 WHEN 'Wednesday' THEN 3 WHEN 'Thursday' THEN 4 WHEN 'Friday' THEN 5 WHEN 'Saturday' THEN 6 WHEN 'Sunday' THEN 7 ELSE 8 END"
    rows = await database.fetch_all(query=query)
    result = {row["day_of_week"]: row["total"] for row in rows}
    return result


async def accident_by_date():
    query = " SELECT TO_CHAR(accident_date, 'YYYY-MM') AS month, COUNT(*) AS total FROM accidents GROUP BY month ORDER BY month"
    rows = await database.fetch_all(query=query)
    return [{"month": row["month"], "total": row["total"]} for row in rows]


async def get_heatmap_by_bounds(south: float, north: float, west: float, east: float):
    query = """
        SELECT 
            ROUND(latitude::numeric, 2) AS lat,
            ROUND(longitude::numeric, 2) AS lng,
            COUNT(*) AS weight
        FROM accidents
        WHERE latitude BETWEEN :south AND :north
          AND longitude BETWEEN :west AND :east
        GROUP BY lat, lng
    """
    values = {"south": south, "north": north, "west": west, "east": east}
    rows = await database.fetch_all(query, values)
    return [
        {"lat": row["lat"], "lng": row["lng"], "weight": row["weight"]} for row in rows
    ]


async def get_road_conditions():
    query = "SELECT road_surface_conditions, COUNT(*) as total from accidents GROUP BY road_surface_conditions"
    rows = await database.fetch_all(query=query)
    return {row["road_surface_conditions"]: row["total"] for row in rows}
