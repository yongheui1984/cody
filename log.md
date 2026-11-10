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

## 2026-11-10 영화_A_수정.html (left auto-align fix)

- Deliverable: `영화_A_수정.html`, copied from `영화_A_초안.html`. The draft is left untouched.
- Problem: a poster dropped on a tier stayed in the box where it was dropped (gaps on the left), and dropping on an already filled box pushed the old card to a "next free box" instead of inserting.
- Change: only `normalize()` and `dropTo()` in the script. Cards in every tier are now kept packed from the left; the free boxes are always on the right. A drop inserts the card at the dropped position (an empty box means the end of the row). Everything else (layout, colors, slide, save, reset) is unchanged.
- Over capacity still works as before: the extra card goes after the last box and the tier turns red.
- Saved state: same localStorage key, so a layout saved with gaps is packed to the left on the next open.
- Spec note: `기획서.md` does not state this rule; the left-packed behavior was requested by the user after trying the draft.
