# Movie_Tier_List log

## 2026-11-10 first build

- Deliverable: `index.html` (HTML, CSS, JavaScript, posters and background all inside one file; opens by double-click, no server).
- Movie list: KOBIS yearly box office list for 2026, filtered to opening date 2026-01-01 or later and cumulative audience 1,000,000 or more as of 2026-11-10. 19 films.
  - Next film below the line: 옵세션 (975,408), so it is not included.
- Tier slots: S 1, A 2, B 3, C 5, D 8 (total 19, equal to the number of films).
- Posters: downloaded from the KOBIS movie detail pages into `posters/`, resized to 330px wide and embedded in `index.html`.
  - 암살자(들): the default poster carries a "3 million" promo banner, so the three-portrait poster was used instead.
- Background: Unsplash photo JHmhdwoGvTI (stage with lit "2026" sign), saved as `background/awards_stage.jpg` and embedded in `index.html`.
- Why images are embedded: Chrome blocks saving a canvas that contains images loaded from local files, so the PNG save button would fail with separate image files.
- Slide order: opening date ascending. Slide speed 38px per second, right to left.
- Saved image: 1920x1080 PNG, file name `movie_tierlist_2026.png`.
- Layout: follows the window size; below about 36px slot width it stops shrinking.
- Tier over capacity: the row widens to keep card size; it only shrinks cards when the window is too narrow.
