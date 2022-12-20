-- A script ttht lists the numbers of records withe same score in the table of the database in my MySQL server.
SELECT score, COUNT(score) AS number FROM second_table GROUP BY scoer ORDER BY score DESC
