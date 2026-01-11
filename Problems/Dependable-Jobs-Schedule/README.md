# Dependable Jobs Schedule

You’re given a number of jobs and a list of dependencies.
Each job is labeled from 0 to jobs - 1.
Each dependency [a, b] means job a can only start after job b is finished.
Return true if all jobs can be finished, or false if there’s a circular dependency.

## Infos which are maybe needed

Some Infos. This section can also just get deleted

## Documentation

### Solution Idea

The idea is, to have a map which has keys for every job. The value for every key are the jobs which the key depends on.
Now there is also a map for every job where the value for the key is a boolean, which says if this job can be completed or not.
When creating this second map, the default value gets set to false (job can't be completed) only when there is a dependence for that job. If this job hasn't a dependence, the job can be marked as can be completed.
Now we loop over the map with the dependencies and set the job to can be completed, if every job which the base job depends on can be completed.
We do this for x times where x is the length of the given dependencies.

If the can be completed map now has still jobs with 'false' we can return false otherwise we return true.

---

### [Implementation](./solver.ts)

---

### Information's %Informations where the problem comes from. Most of them came from Sloth Byte%

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/the-3-types-of-caches) from October 22, 2025.
