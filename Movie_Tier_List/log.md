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

## 2026-11-10 영화_A_완성.html (기획서 §6 추가 업데이트 요청사항 반영)

- Deliverable: `영화_A_완성.html`, built from `영화_A_수정.html`. The source file is left untouched.
- 1. Release by drop: dragging a card that sits in a tier and dropping it anywhere outside every tier box now returns it to the slide. Dropping on another tier still moves it.
- 2. S tier: fireworks on a full-screen canvas, 2 seconds. 3. D tier: rain with a dark tint, 2 seconds. They play when a card newly arrives in that tier (drag, click, or key), not on reload.
- 4. Click a slide poster: the slide stops and a thick red border marks it; clicking the same poster again clears the border and resumes. A drag does not select.
- 5. With a poster selected, clicking a tier letter places it there. 6. With a poster selected, pressing S, A, B, C or D places it there. The key is read by physical key (`e.code`), so it also works while the Korean input mode is on.
- 7. Tier look: each tier has its own letter-badge color. The higher the tier, the more it moves: S (gold shimmer, pulsing glow, light sweep, twinkle), A (purple, glow, slow sweep), B (blue, soft glow), C (muted teal, still), D (dull gray, still). The saved PNG uses the same badge colors.
- Kept as is: the border and fill color of each tier still follow the gray / yellow / green / red count rule in 기획서.md §3, because the plan fixes that rule. The new per-tier colors sit on the letter badge and the glow only.
- Added one line of help text above the slide to describe click-select and the key shortcut.

## 2026-11-10 영화_A_완성.html (A, B, C placement effects)

- Request: S (fireworks) and D (rain) effects stay as they are; add suitable 2-second effects for A, B and C, and add the request to 기획서.md §6 as item 8.
- Change: only the effect code in `영화_A_완성.html` (`playFx()` and `fxFrame()`). A: purple and pink confetti over the whole screen. B: blue ripple rings spreading from the B row plus rising sparks. C: gentle bubbles floating up from the C row. Same trigger as S and D: a card newly arrives in that tier.
- Check: headless Chrome, each of the five tiers plays its effect and the canvas is empty again after 2 seconds; no console errors.
- 기획서.md: §6 item 8 added.

## 2026-11-10 영화_A_완성.html (video background)

- Request: use `background/awards_stage.mp4` as the background and play it automatically in the background; add the request to 기획서.md §6 as item 9.
- Change: a full-screen `<video>` (autoplay, muted, loop, cover fit) sits behind the page, under the same dark gradient as before so titles and cards stay readable. The old still photo stays as the video's backing layer (shown while the video loads or if the file is missing).
- Video file: referenced by the relative path `background/awards_stage.mp4` (688x432, 10 s, 5.4 MB), not embedded, to keep the HTML from growing by about 7 MB. The `background` folder must stay next to the HTML file.
- Saved PNG: still uses the embedded still photo. Drawing a video from a local file onto the canvas can block saving in Chrome, so the video is not used there.
- Check: headless Chrome, video plays muted and loops, frames change over time, PNG save still works, no console errors.
- 기획서.md: §6 item 9 added.

## 2026-11-10 영화_A_완성.html (평가포기 side tier)

- Request: the pyramid leaves too much empty space on both sides; add a "평가포기 (똥맛 영화)" tier on the right as 1 x 4 boxes (the user corrected my first reading: one vertical column, not one row), with a flying-poop effect when a movie goes in; make the title text bigger; add the request to 기획서.md §6 as item 10.
- Change: new tier `P` (4 boxes stacked vertically) to the right of the pyramid; pyramid and side tier are centered together as one group and the cell size is recalculated for the group width. Title is three lines (💩 / 평가포기 / (똥맛 영화)), panel width 2.1 cells.
- Effect: 18 poop emojis burst out of the tier and bounce around the whole screen for 2 seconds, same trigger rule as the other tiers.
- Same rules as the other tiers: drag and drop, move, drop outside to release, click the title with a poster selected, count color (gray / yellow / green / red), saved state, reset.
- Over capacity (a 5th card): the column grows downward and the cards shrink only if it would not fit the window height; the tier turns red.
- Saved PNG: the side tier is drawn to the right of the pyramid, group centered, same title text.
- Spec note: the S to D slot total stays 19 (= number of films). The side tier has its own 4 boxes and is not part of that total, so §3 "all tier boxes add up to the film count" now refers to the pyramid only.
- Not added: a keyboard letter for this tier (S, A, B, C, D keys unchanged).
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: column layout, no overlap or overflow, effect plays and clears, release by outside drop, reload keeps state, PNG saves; no console errors.
- 기획서.md: §6 item 10 added.

## 2026-11-10 영화_A_완성.html (평가포기: 2 x 2, 1.5x size)

- Request: the 평가포기 boxes must be 1.5 times the size of the pyramid boxes, posters in it get bigger too, and the four boxes are arranged 2 x 2 (this replaces the vertical single column from the previous step).
- Change: the four boxes sit in a grid of 2 columns x 2 rows; each box and its poster are 1.5x the pyramid cell, so the poster title text grows with it. Panel width follows the grid; the pyramid and the panel are still centered together, with the cell size recalculated for the wider group.
- Over capacity (5th card and more): a new row is added below; the cards shrink only when the rows would not fit the window height.
- Saved PNG: same 2 x 2 layout and size.
- Fixed while testing: the poop emoji in the saved-PNG title was written with a doubled backslash and would have printed as text; corrected.
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: 2 x 2 layout, box width exactly 1.5x the pyramid box, no overlap or overflow, effect plays and clears, release by outside drop, reload keeps state, PNG saves with the emoji; no console errors.
- 기획서.md: §6 item 10 updated (2 x 2, 1.5x size).

## 2026-11-10 영화_A_완성.html (평가포기: box size 2x)

- Request: make the 평가포기 boxes 2 times the pyramid box size instead of 1.5 times.
- Change: the size factor `SIDE_K` goes from 1.5 to 2; the width reserved for the side panel (screen and saved PNG) grows to match, so the group of pyramid plus panel still fits and stays centered. Layout stays 2 x 2.
- Over capacity: from the 5th card on, a third row is added and the cards shrink to fit the window height (about 1.5x at 1440x900), as before.
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: box width exactly 2.00x the pyramid box, no overlap or overflow, effect plays and clears, release by outside drop, reload keeps state, PNG saves; no console errors.
- 기획서.md: §6 item 10 updated (2x).

## 2026-11-10 영화_A_완성.html (gap between pyramid and 평가포기)

- Request: the gap between the pyramid and the 평가포기 tier is too small; widen it enough.
- Change: the gap goes from 0.8 to 2 pyramid-box widths (about 118 px at 1440x900). The width reserved for the pyramid plus panel group (screen and saved PNG) grows to match, so everything still fits and stays centered.
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: gap is exactly 2.00 pyramid boxes, no overlap or overflow, PNG saves with the same gap; no console errors.
- 기획서.md: §6 item 10 got one line for the gap.

## 2026-11-10 영화_A_완성.html (C rain, D thunder) and 기획서.md §6 rewrite

- Request: C tier plays the rain effect, D tier plays a thunder effect (replacing the C bubbles); reflect it in 기획서.md. Also (earlier message) put all the content into 기획서.md.
- Change: rain (unchanged drawing) now belongs to C. D gets a new thunder effect: storm-dark tint, four jagged lightning bolts with branches (0.1, 0.5, 0.9, 1.4 s) and a white-blue flash on each strike, all over in 2 seconds. The C bubble effect is removed.
- Check: headless Chrome: C rain and D thunder play and clear after 2 s; S, A, B and 평가포기 effects still play and clear; no console errors.
- 기획서.md §6: rewritten so every request is in it with its final behavior as sub-bullets (common animation rule, release by outside drop, selection, click and key placement, tier looks, video background, 평가포기 tier, C/D effect swap as item 11). Items 3 and 8 point to item 11 for the change. The wording of the user's requests is kept as written.

## 2026-11-10 영화_A_완성.html (pyramid 15, 평가포기 3, new 천상계 tier)

- Request: pyramid down to 15 boxes, 평가포기 down to 3, and a new "천상계" tier with 1 box to the left of the pyramid.
- Change: pyramid S 1 / A 2 / B 3 / C 4 / D 5 (was 1/2/3/5/8). 평가포기 3 boxes in 2 columns (2 + 1). 천상계 is a side tier on the left, box size equal to a pyramid box, gap to the pyramid 2 box widths (same as the right side). The three blocks are centered as one group; cell size is recalculated for the wider group.
- Total: 1 + 15 + 3 = 19 = number of films, so all boxes now add up to the film count.
- 천상계 look: S-style shimmer, glow pulse, light sweep and twinkle in pearl white / sky blue; same colors in the saved PNG. No placement effect and no keyboard letter, because none was asked for.
- Side tiers were generalized (columns, size factor, label size per tier) so the screen layout and the saved PNG share one code path for 천상계 and 평가포기.
- Saved state key bumped from v1 to v2: the old arrangement was made for the old box counts (for example 8 in D), so it is not loaded.
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: box counts 1/1/2/3/4/5/3, 평가포기 box exactly 2x, both gaps exactly 2 boxes, group centered, no overflow; click placement, key S, drag into 천상계, drop outside to release, over-capacity (red, row grows), reload keeps state, PNG saves with both side tiers; no console errors.
- 기획서.md: §6 item 12 added; items 10 marked where 4 boxes and the 19 total changed.

## 2026-11-11 영화_A_완성.html (천상계 clouds, all effects 3 seconds)

- Request: the 천상계 tier gets a placement animation where clouds sweep past; every tier animation becomes 3 seconds.
- Change: 천상계 effect = light sky tint plus 10 white soft clouds crossing the whole screen from both sides, each finishing within the 3 seconds. The effect length goes 2000 -> 3000 ms for all tiers; the timings inside each effect were stretched to match (S bursts, D bolts, B rings and sparkles, A confetti start spread).
- Check: headless Chrome at 1440x900, placing a card in each tier: every effect starts at about 0.15 s, is gone before 3.3 s and leaves nothing on the canvas; no console errors.
- 기획서.md: §6 item 13 added; the common animation rule and the 2-second notes in items 2, 3, 8, 10 changed to 3 seconds; item 12 now points to item 13 for the 천상계 effect.

## 2026-11-11 영화_A_완성.html (천상계 box 3x)

- Request: make the 천상계 box 3 times the size of the pyramid box.
- Change: the 천상계 size factor goes from 1 to 3; its name badge and label text are enlarged to match. The width reserved for the left panel (screen and saved PNG) grows, so the whole group (천상계 + pyramid + 평가포기, gaps still 2 pyramid boxes) is recalculated and stays centered.
- Over capacity: a second card adds a row below and the cards shrink to fit the window height, as for 평가포기.
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: 천상계 box exactly 3.00x, 평가포기 2.00x, both gaps exactly 2 boxes, group centered, no overflow; placement, key, drag, drop outside, reload, PNG all still work; no console errors.
- 기획서.md: §6 item 14 added; item 12 marked where the 천상계 box size changed.

## 2026-11-11 영화_A_완성.html (천상계 top, 평가포기 bottom)

- Request: align the 천상계 tier to the top and the 평가포기 tier to the bottom.
- Reading: top/bottom of the pyramid block (top edge of the S row, bottom edge of the D row), not the screen edges, so the group stays centered and the tiers sit beside the pyramid.
- Change: the stage is now a 3-column grid; 천상계 aligns to the start (top) and 평가포기 to the end (bottom) of the pyramid height, the pyramid stays centered. Saved PNG uses the same two positions.
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: 천상계 top minus S top = 0 px, 평가포기 bottom minus D bottom = 0 px, gaps still 2 boxes, group centered, no overflow; placement, over-capacity, reload and PNG still work; no console errors.
- 기획서.md: §6 item 15 added.

## 2026-11-11 영화_A_완성.html (평가포기 1 x 3)

- Request: change the 평가포기 tier to a 1 x 3 layout.
- Reading: 1 x 3 follows the 기획서 notation "가로 x 세로" (like 2 x 2 = 2 across, 2 down): 3 boxes in one row. The vertical alternative (3 stacked) needs 11.4 box widths of height and would shrink the 2x boxes to about 1.5x at 1440x900.
- Change: 평가포기 columns 2 -> 3, box size stays 2x. The width reserved for the group (screen and PNG) grows by about 2.1 boxes, so the cell size is recalculated. Saved PNG: the cell size is also limited by the width (1800 px usable) and the group is centered vertically, otherwise the side tiers touched the image edges.
- Check: headless Chrome at 1440x900, 1920x1080 and 1280x720: 평가포기 box 2.00x, 천상계 3.00x, gaps 2 boxes, top/bottom alignment 0 px, group centered, no overflow; over-capacity (4th card wraps to a new row), reload, PNG all work; no console errors.
- 기획서.md: §6 item 16 added; item 10 marked.

## 2026-11-11 file rename: 영화_A_완성.html -> 영화_기능추가.html

- Request: rename the working file to 영화_기능추가.html. Only the name changed; the content is untouched.
- Entries above this one use the old name 영화_A_완성.html because that was its name when they were written.
- 기획서.md: the "작업 파일" line of §6 now names 영화_기능추가.html. §6 was also turned into a table (번호 / 요구사항 / 완성 기준) with one success criterion cell per item.

## 2026-11-11 미션4_기록.md filled in

- Request: after everything is done, write the 기록 양식 as an md file.
- Change: 미션4_기록.md (it already existed) was rewritten from the template: AI name and capture file (1-4_claude-채팅.png, the chat of the first request), features 1 to 16 with reasons, and the 받은 파일 table with the renamed file 영화_기능추가.html.
- Check: all 10 criteria of 기획서 §5 re-run in headless Chrome on 영화_기능추가.html (open, 19 cards, slide flow and stop, pyramid and box sum 19, drag between slider/tiers, four colors, reload, reset, 16:9 PNG): all passed, no console errors.
