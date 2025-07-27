WITH
    tb1 AS (
        SELECT
            col.contest_id,
            SUM(ss.total_submissions) AS ts,
            SUM(ss.total_accepted_submissions) AS tas
        FROM
            Colleges col
            JOIN Challenges ch ON col.college_id = ch.college_id
            JOIN Submission_Stats ss ON ch.challenge_id = ss.challenge_id
        GROUP BY
            col.contest_id
    ),
    tb2 AS (
        SELECT
            col.contest_id,
            SUM(vs.total_views) AS tv,
            SUM(vs.total_unique_views) AS tuv
        FROM
            Colleges col
            JOIN Challenges ch ON col.college_id = ch.college_id
            JOIN View_Stats vs ON ch.challenge_id = vs.challenge_id
        GROUP BY
            col.contest_id
    )
SELECT
    con.contest_id,
    con.hacker_id,
    con.name,
    tb1.ts,
    tb1.tas,
    tb2.tv,
    tb2.tuv
FROM
    Contests con
    JOIN tb1 ON con.contest_id = tb1.contest_id
    JOIN tb2 ON con.contest_id = tb2.contest_id
WHERE
    tb1.ts > 0
    AND tb1.tas > 0
    AND tb2.tv > 0
    AND tb2.tuv > 0
ORDER BY
    con.contest_id;



