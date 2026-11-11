# Research log

Research date: 2026-11-11. Reference date for every record is the same day. Tier 1 was completed first. Tier 2 was not started. Gap patches dated 2026-11-11 were applied on top of the passing records. Where a patch withdrew a difficulty level, the delivered record does not keep the old level. Where a patch supplied hours, pass rates, fees, dates, or a new level, those figures and their sources were written in. Fields the notes and patches leave unverified stay `unknown`, with the reason in `unknown_reasons`. No difficulty level was averaged from structure alone, and pre-exam or registration-course hours were not treated as study hours.

The section 7 checklist was run on all 45 records. Required fields are present or set to `unknown` with a reason. Education, work-field, and domain values stay inside the template vocabularies. Where all three hour fields are numbers, `hours_min` is less than or equal to `hours_typical`, which is less than or equal to `hours_max`. Foreign fees keep a currency, a KRW approximation, and an FX date from the notes. Each record has at least one source. `kr_cpa` is the exception on source type: the opened administering-body pages are typed `regulator` (the Certified Public Accountant Act and the Financial Services Commission notice), not `official`, and `https://cpa.fss.or.kr` was not a rendered source in the notes. IDs are unique. All `_ko` fields are Korean. Developer notes that the source files already wrote in Korean were preserved rather than rewritten.

## 1. Completed exams

All of the following are tier 1 and were still offered under the recorded name on 2026-11-11.

Korea banking, credit, and financial investment:

- `kr_bank_fp`, 자산관리사(FP). The candidate name 은행FP is the older name of this qualification, not a second exam.
- `kr_credit_analyst`, 신용분석사.
- `kr_loan_officer`, 여신심사역.
- `kr_fx_specialist_1`, 외환전문역Ⅰ종.
- `kr_fx_specialist_2`, 외환전문역Ⅱ종.
- `kr_fund_solicitor`, 펀드투자권유대행인.
- `kr_securities_solicitor`, 증권투자권유대행인.
- `kr_fund_advisor`, 펀드투자권유자문인력.
- `kr_securities_advisor`, 증권투자권유자문인력.
- `kr_derivatives_advisor`, 파생상품투자권유자문인력.
- `kr_investment_manager`, 투자자산운용사.
- `kr_research_analyst`, 금융투자분석사.
- `kr_financial_risk_manager`, 재무위험관리사 (KOFIA). This is not the GARP FRM.

Korea insurance, accounting, tax, and financial planning:

- `kr_life_planner`, 생명보험설계사 (exam name 생명보험시험).
- `kr_nonlife_planner`, 손해보험설계사 (exam name 손해보험자격시험).
- `kr_third_sector_planner`, 제3보험설계사.
- `kr_claims_adjuster_property`, 재물손해사정사.
- `kr_claims_adjuster_vehicle`, 차량손해사정사.
- `kr_claims_adjuster_bodily`, 신체손해사정사.
- `kr_actuary`, 보험계리사.
- `kr_cpa`, 공인회계사 (KICPA).
- `kr_cta`, 세무사.
- `kr_cat_1`, 전산회계 1급.
- `kr_cat_2`, 전산회계 2급.
- `kr_tat_1`, 전산세무 1급.
- `kr_tat_2`, 전산세무 2급.
- `kr_financial_controller`, 재경관리사.
- `kr_afpk`, AFPK.
- `kr_cfp`, CFP (FPSB International Korea).

International investment, risk, financial planning, and compliance:

- `gl_cfa`, Chartered Financial Analyst (CFA), Levels I to III.
- `gl_frm`, Financial Risk Manager (FRM), Parts I and II.
- `gl_caia`, Chartered Alternative Investment Analyst (CAIA).
- `gl_cfp`, CERTIFIED FINANCIAL PLANNER, US CFP Board pathway. This is not the Korean FPSB exam.
- `gl_cams`, Certified Anti-Money Laundering Specialist (CAMS).

International accounting, audit, and securities licensing:

- `us_cpa`, Uniform CPA Examination, with California as the recorded jurisdiction.
- `us_cma`, Certified Management Accountant (CMA).
- `gl_acca`, ACCA Qualification.
- `gl_cima`, CIMA CGMA Professional Qualification.
- `gb_aca`, ICAEW ACA.
- `gl_cia`, Certified Internal Auditor (CIA).
- `us_sie`, Securities Industry Essentials (SIE).
- `us_series_7`, Series 7 General Securities Representative Exam.
- `us_series_63`, Series 63 Uniform Securities Agent State Law Exam.
- `us_series_65`, Series 65 Uniform Investment Adviser Law Exam.
- `gb_imc`, CFA UK Level 4 Certificate in Investment Management (IMC).

## 2. Excluded, abolished, merged, or renamed

- 은행FP was not given a second record. It is the older popular name of the active Korea Banking Institute qualification whose current official name is 자산관리사(FP), Financial Planner(FP), accreditation 금융위원회 제2025-6호, registration 2008-0441. The id stays `kr_bank_fp`. Source: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=04
- 파생상품투자권유대행인 was deleted as a category on 2011-01-26 by the business-conduct rule, Article 2-17 item 3. It is not a current exam and was not given a record. The current derivatives qualification that was researched is 파생상품투자권유자문인력. Source: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=136&historySeq=1757
- 종합손해사정사 is not a fourth exam. The enforcement rule lists property, vehicle, and bodily-injury adjusters as separate licenses. A person who has passed all three and finished the practical training may apply to register as a comprehensive adjuster. The old type-1 through type-4 names appear only as a transitional map. Source: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
- The well-known UK IMC is the CFA UK Level 4 Certificate in Investment Management, not a CISI exam. It is recorded as `gb_imc`. CISI's separate Certificate in Investment Management was not substituted and was not given a record. Source: https://www.cfauk.org/learn/qualifications/investment-management-certificate
- The 2014-09-18 revision of the KOFIA professional-staff rule replaced the old 투자상담사 labels with the current 투자권유자문인력 labels. Prior passes remain recognized. Those old labels were not given new records. Source: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
- 일임투자자산운용사, 집합투자자산운용사, and 증권분석사 are prior credentials used only as exemption or registration history, not current exams. Source: the same KOFIA professional-staff rule, https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
- 외환관리사 was not treated as a successor of 외환전문역. Other Korea Banking Institute names seen on the same fee table and left out of the Tier 1 scope, not researched as replacements, are 국제금융역, 신용위험분석사(CRA), 은행텔러, 영업점 컴플라이언스 오피서, 프라이빗뱅커(CPB), KBI 금융DT 테스트, TPAC, and KBI 금융 AI 리터러시. Source: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=09
- 간단보험설계사 is a narrower registration. The insurance supervision rule exempts it from the association exam and from the one-year exam-education pairing, so it was not recorded as a planner exam. 보험대리점 자격시험 is run by the insurance institute and is not one of the three planner exams. 보험계약관리역 was not in scope. Source: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290427&chrClsCd=010202&efYd=20261002
- 전산회계운용사, run by the Korea Chamber of Commerce and Industry, is a different qualification from 전산회계 1급 and 2급 and was not used as their issuer. `kr_tat_1` and `kr_tat_2` are computerized tax accounting under the Korean Association of Certified Tax Accountants. They are not the KICPA TAT exam. Source: https://license.kacpta.or.kr
- The Korean FPSB CFP exam was not copied onto `gl_cfp`. The US CFP Board pathway was recorded separately because the opened US professional count was large enough to treat the United States as the main market, and the paper tests US tax and retirement rules. Source: https://www.cfp.net/industry-insights/reports-and-statistics/professional-demographics
- ACAMS CCAS, a separate cryptoasset credential scheduled to open on 2026-11-19, is not a CAMS replacement. The Americas CIMA Finance Leadership Program is not the CGMA exam path recorded here. The CIA Challenge Exam is another route to the same credential and is described outside the three-part stage list. No candidate in the accounting batch was found discontinued or renamed. CPA Evolution remains the current US CPA exam, and CGMA remains the designation awarded through the CIMA professional qualification.

## 3. Exams added or split beyond a single candidate name

- 외환전문역 Ⅰ종 and Ⅱ종 are separate records, `kr_fx_specialist_1` and `kr_fx_specialist_2`. Both Korea Banking Institute guides say they are separate qualifications with separate certificates and may be sat alone or together. Source: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=10
- 손해사정사 is split into `kr_claims_adjuster_property`, `kr_claims_adjuster_vehicle`, and `kr_claims_adjuster_bodily`. The enforcement rule gives the three kinds different subjects. 종합손해사정사 is registration after all three, not a fourth exam. Source: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
- 전산회계 1급 and 2급, and 전산세무 1급 and 2급, are four records. A candidate may take any level without holding the other, and the same day can include more than one qualification. Source: https://license.kacpta.or.kr
- 생명보험설계사, 손해보험설계사, and 제3보험설계사 are three records. The third-sector exam can be sat through either association, but it is one qualification with two alternative forms, not two credentials.
- AFPK is one exam with two modules, not two credentials. Korea CFP and US CFP are separate records because they are run by different operators.
- CFA Levels I to III, FRM Parts I and II, CAIA's two levels, US CPA's Core plus one Discipline, US CMA's two parts, CIMA's four levels, ICAEW ACA's three levels, CIA's three parts, and the two IMC units stay inside one record each, with stages. ACCA required papers are separate stages because the body does not sit a level as one paper. The four ACCA Strategic options are one stage because the candidate sits any two.

## 4. Tier 2 candidates not researched

Tier 1 was completed first. Tier 2 was not started. These candidates were not checked far enough to exclude them, except where section 2 already records a check.

Korea:

- 변액보험판매관리사.
- 보험중개사. The insurance notes name both of these as Tier 2 and not researched.
- 관세사.
- FAT and the KICPA TAT exam. The computerized-tax records explicitly say the KICPA TAT exam was out of scope. FAT was not opened.
- IFRS관리사.
- 신용관리사. It was not verified. 신용위험분석사(CRA) was seen on the Korea Banking Institute fee table and left out of the Tier 1 scope. It was not given its own record, so it remains unresearched as a Tier 2 credential rather than excluded as nonexistent. Source for the sighting: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=09
- Employment exams: Bank of Korea, Financial Supervisory Service, major commercial-bank recruitment written exams (NCS and finance knowledge), and financial public-institution NCS exams.

International:

- CMT, PRM, CQF, CIPM, GARP SCR, and the CFA Institute Investment Foundations and ESG certificates.
- CPA Australia, Chartered Accountants ANZ, CPA Canada, HKICPA Qualification Programme, ICAI Chartered Accountant (India), ICMAI CMA (India), and the US Enrolled Agent exam.
- CFE and ICA certificates.
- CTP (AFP).
- Canadian Securities Course, Singapore CMFAS exams, India NISM and AMFI exams, and UK Chartered Banker qualifications.
- Japan: 証券アナリスト, FP技能士, 日商簿記検定, 銀行業務検定, and 証券外務員.
- China: CICPA, the fund practitioner qualification, the securities practitioner qualification, and the banking professional qualification.
- US ChFC and CLU.

파생상품투자권유대행인 is not listed here. It was checked and excluded in section 2. The CISI-named IMC candidate is not listed here. It was checked, identified as the wrong body for the well-known IMC, and not given a record.

## 5. Open issues

### Eligibility, fees, hours, pass rates, and difficulty left unknown

Korea banking and KOFIA:

- `kr_loan_officer` study hours and difficulty level stay unknown. The 2026 Korea Banking Institute courses are 128 hours (여신심사, 3,643,000 won) and 140 hours (여신법률, 4,180,000 won). Those are pre-exam course lengths, not written-exam study hours.
- `kr_fx_specialist_2` hours are a single provider course of 62 hours, not an official recommendation and not a surveyed range. Pass rates before 2025 are unknown because the private-qualification portal combined both FX types. Validity and continuing education are unstated for the five Korea Banking Institute exams.
- `kr_fx_specialist_1` hours are a low-confidence researcher estimate of 41. Item counts are unknown for all five banking exams.
- Sitting fees for `kr_investment_manager`, `kr_research_analyst`, and `kr_financial_risk_manager` stay unknown. The 2026 license-center notices do not print a won amount. The 2022-12-01 notice of 50,000 won from 2023 was not used as the 2026 fee. Epass says 40,000 won and Wowpass says 50,000 won for 투자자산운용사. Those figures were not averaged. Partial-subject fees from the 2022 notice were also not confirmed for 2026. Official study-hour recommendations are missing for all three. The analyst and risk-manager hours are researcher estimates.
- Pass rates and examinee counts are unknown for all five KOFIA sales and advisor exams. Investor-protection, registration, and continuing-education tuition amounts, and the company registration fee, are unknown. The 2027 KOFIA calendar was not posted. The rule requires it by 2026-12-31.

Korea insurance:

- Study hours stay unknown for all three planner exams, all three adjuster exams, and the actuary. Registration-course hours (20H, 30H, 40H) and the actuary cyber course's three-month enrollment window were not converted into study hours. Because hours are unknown, none of these seven exams has a difficulty level. The old structure-only levels were withdrawn.
- Planner pass rates stay unknown. No association, FSS, or KOSIS rate table was opened.
- Adjuster first-exam pass rates stay unknown. Second-exam final rates for 2022 through 2026 were entered from the FSS releases. Property mean 13.10, vehicle mean 18.82, bodily-injury mean 14.32. Those means are the total pass-rate fields. They are not an average of the first and second exams, and they are not the combined three-type rate.
- Actuary final pass rate stays unknown. The releases print final passer counts (166, 169, 126, 120, 104 for 2022 through 2026) and subject-sitting rates with duplicate sittings, not a unique examinee denominator. Subject rates were not scored.
- Non-life planner duration in minutes, a single annual sitting count for the monthly planner exams, the life-association fee when both life and third-sector are requested, the non-life nationality rule, and the statutory disqualification list text were not opened. Adjuster and actuary question counts are unknown.

Korea accounting and financial planning:

- `kr_cpa` total hours are the 828-hour simultaneous basic course. The first-exam stage is a different 536-hour multiple-choice course and was not added. Second-exam hours, including auditing, stay unknown. Second-exam duration and item counts stay unknown. The pass-rate counts come from news that attributes them to the FSC or FSS, not from an opened results bulletin. Current CPE hours are unknown.
- `kr_cta` first-exam basic lectures are 520 hours. Second-exam lecture hours were not opened, so the total and the difficulty level stay unknown. The old level 4 was withdrawn. Stage minutes, item counts, English cut scores, some examinee counts, and the current registration fee stay unknown.
- `kr_cat_1`, `kr_cat_2`, `kr_tat_1`, and `kr_tat_2` have no opened course-hour total. Their old levels were withdrawn and stay unknown. Session examinee counts, rates after session 126, and the certificate fee after the 2026-01-06 adjustment notice stay unknown.
- `kr_financial_controller` hours are the 142-hour sum of three 2025 basic-theory lecture labels. Problem-solving and final courses were not added. The 2026 sitting dates were not read from the schedule image.
- `kr_afpk` hours are the education minima restated by a provider blog: classroom 80 and internet 88. There is no ceiling, so `hours_max` is unknown. The official fee table, the full waiver list, renewal credits, and the 94th result were not opened.
- `kr_cfp` format, subjects, duration, passing rule, sessions per year, pass rate, experience years, education-hour total, and difficulty level stay unknown. The application URL returned only a bot check. The 2026 exam fee of 242,000 won, the 2026-11-21 date, and the certification fees were filled from the operator. Pre-December 2025 hagwon figures were not copied. The homepage's Korean and English addresses were not reconciled.

International investment and compliance:

- CFA per-level early and standard fees stay unknown. The opened dates page states only the three-level total, USD 3,520 to 4,570, and a "From USD 1,140" banner. Specific 2027 sitting dates did not render. The institute states about 300 hours per level, not a min-max range. Whether the 10-20 hour Practical Skills Module sits inside those 300 hours is inconsistent, so it was not added. Annual dues were not on the charter page.
- FRM pass rates other than November 2025 (Part I 47 percent, Part II 50 percent) were not opened, so the average pass rate is unknown and the pass-rate score is dropped. The 240-hour study figure is not labeled per part. This record applies it to each part and may double-count.
- CAIA pass rates, current question counts, and membership dues were not found. Hours are a published minimum of 200 per level with no upper bound.
- US CFP certification-application and renewal fees, the lifetime attempt limit, and the next confirmed 2027 window dates stay unknown. Hours are Dalton's 225-250 band, midpoint 237.5, not a CFP Board total. The level 3 uses pass rate, those hours, and structure together. The earlier level 3, computed without hours, was withdrawn even though the integer matches.
- CAMS pass rate, numeric passing score, study hours, blueprint topic names, annual membership price, and whether a Korean-language form exists stay unknown. The English certification page returned only a bot check. The old level 1, from structure alone, was withdrawn. The level stays unknown.

International accounting and licensing:

- US CPA program pass rate, minimum calendar months, whether Discipline sections are limited to the first month of a quarter, and California CPE hours stay unknown. Other states were not researched.
- US CMA official pass rates, renewal, and which of Becker's two sitting rules is correct stay unknown. Duration is now 240 minutes per part from the IMA China FAQ, which states a 4-hour total. The English help article did not render. Study hours were not changed.
- ACCA exam format, duration, pass mark, Applied Knowledge fees, study hours, option-stage and program pass rates, and the 2027 redesign's first sitting date stay unknown. Total hours and the level stay unknown.
- CIMA academic minimum, pass mark, pass rates, Certificate study hours, case-study calendar dates, and which fee tier applies to Korea stay unknown. Professional levels stay at 550 hours each. The Certificate page's six months is calendar time, and the opened BPP Certificate page gave no study hours, so the total was not summed and the level stays unknown.
- ACA syllabus format, duration, sittings, and study hours stay unknown, as do Certificate pass rates, a single Advanced fee, and whether 450 days or the words "three years" is the award minimum. The level stays unknown.
- CIA pass rates, study hours for the 2025 English syllabus, scaled-score bounds, CPE hour count, and the 2027-01-04 fee amounts stay unknown. The Gleim hour chart is explicitly for the pre-2025 exam and was not used. The level stays unknown.
- FINRA does not publish session or annual pass rates for the SIE, Series 7, Series 63, or Series 65 on the pages opened. Unofficial survey rates were not used. The official Series 7 cut score is unknown. The October 2025 outline describes equating and does not print a cut score. Kaplan's 72 was not treated as official. NASAA outline names, default post-termination validity of Series 63 and 65, state registration fees, IAR continuing-education hours, and Series 65 designation waivers were not opened because nasaa.org returned a country block. The FINRA enrollment-window length and annual sitting counts are unknown. IMC retake cap, exemption list, overseas test-center country codes, postage, award expiry, and mandatory CPD are unknown. IMC pass rates are only a standing band of 65 to 80 percent, so no average was computed.

### Source conflicts that were not resolved by picking a silent average

- PQI labels the FX competent ministry 재정경제부. The Korea Banking Institute fee table still prints 기획재정부 제2025-2호. The accreditation line on the institute page was used.
- Full-exam banking fees are 1,000 won below the sum of the part fees for 자산관리사, 신용분석사, and 여신심사역. The full fee is the standard fee.
- Wowpass still describes 투자자산운용사 as 150 minutes with a 60 percent average. The 2026 provider page and the long-standing schedule reproduction say 120 minutes and 70 percent with a 40 percent subject floor. The 70/40 line was used, at medium confidence.
- A November 2024 KOFIA comment said solicitor exams would rise from two to three sittings in 2026. The November 2025 calendar and the live exam-center schedule both show two sittings. Two was used.
- 2024 vehicle adjuster results conflict inside FSS PDFs. The 47th release prints 110 passers and 18.4 percent. The 48th comparison column prints 111 passers and 18.6 percent. The series uses 18.4 percent. Using 18.6 percent would make the five-year mean 18.86, still inside 15 to 29 percent.
- Life-planner materials disagree on 30 versus 40 items when life and third-sector are sat together. Non-life materials disagree on the article number for the 60-point line and on 33 items versus a floor of 25. The opened 2026 guideline was preferred. An English secondary article's adjuster counts were not used because the Korean FSS PDFs were later opened and used instead.
- A commercial 세무사 page that requires a degree plus experience, and fees other than 30,000 won, was rejected because it contradicts the Act and the 2024 plan notice. One article's prior second-exam rate of 17.66 percent with 712 passers was not used. The later count is 728 of 6,943, or 10.48 percent. The 2022 second-exam rate is printed as both 11.56 and 11.63 percent. The series used in the record was kept.
- AFPK headlines mix simultaneous both-module passes, final passes including carry-ins, and annual aggregates. Only simultaneous passes over both-module examinees are in the average. A provider page still shows the 2018 timing of 190 items. The 2026 study guide says 150 items and 170 minutes from the 94th exam.
- California exam FAQ updated 2026-10-08 says REG and the Discipline are 3 hours. The NASBA candidate guide cover-dated 2026-11-02, and Becker on 2026-05-28, say every section is 4 hours. The US CPA record uses 240 minutes and lowers structure confidence.
- Becker's CPA page gives a 400-600 hour total, while the sum of its own section ranges is 370-550. The record uses the section sum so the stage hours add up.
- The same Becker CMA page says active membership alone is enough to sit, and later says a degree or a recognized certification plus two consecutive years are required before sitting. Both paths are stored. Confidence is low.
- ACA Discover says 14 exams and also both "three years of training" and "a minimum of 450 days." June 2026 results are dual-syllabus. No single paper count or year-equivalent was forced.
- CFA Level III weights on the curriculum page do not match the by-topic crosswalk on the same page. The by-level table was used. The results HTML page no longer lists the latest percentages in text. The historical PDF through August 2026 was used.
- The CFP historical PDF has a duplicated block around 2022-2023. The latest five administrations match the live July 2026 statistics page and were used. The overall mean is 65.2 percent, not a first-time rate.
- FRM FAQ text still says work experience must be submitted within five years. The exam-policies page and the May 2025 notice say ten years. The policies page and the notice were followed.
- FX sources differ across records and were not reconciled to one rate. The global investment records use the Federal Reserve H.10 rate of 1,361.89 won per US dollar on 2026-11-06. Several accounting and licensing records use the Seoul close on 2026-11-10 of 1,337.5, or Citibank Korea's screen on 2026-11-11 of 1,334.60 for the dollar and 1,780.36 for the pound. Wise printed both 1,781 and 1,780.62 won per pound on 2026-11-11. Each record keeps the rate its own notes used.
- SIE and Series 7 fees use the live 2026 table (USD 100 and USD 395), not older cached amounts. Series 65 uses the current 92-of-130 rule, not an older 94-of-130 figure. Series 7 study hours follow Kaplan (80-100 with a finance background, about 150 without) and note Knopman's 75-100.

### Rule changes expected within 12 months

- CFA: the 2027 curriculum starts with the February 2027 exams, announced 26 May 2026. The largest change is Level I quantitative methods and equities, about 25 percent of that exam, plus ethics updates at all levels and a later-2026 Level III due-diligence Practical Skills Module. Level III pathways stay Portfolio Management, Private Markets, and Private Wealth. Paid deferrals end with the February 2027 administrations. A candidate who does not sit forfeits the fee and must register again. Pre-February 2027 sittings keep the older deferral policy. Source: https://www.cfainstitute.org/about/press-room/2026/deferral-policies-update
- US CFP: a Q1 2027 experience rule requires at least three of the seven planning steps. Pro bono is capped at 500 hours on the Standard Pathway. Experience before the effective date stays on the old rule. The status is `reform_announced`. The bachelor's degree rule is under review and is not yet changed. The exam name and three-window calendar are unchanged.
- California CPA, dated 2027-01-01: 3 ethics semester units are added to sit, and the new license pathway is a bachelor's degree in any field, 24 accounting units, 24 business units, 3 ethics units, and 2 years of experience. The California Board of Accountancy says the concentration regulations are not final. Legacy license education runs through applications on 2028-12-31. The opened October 2026 AICPA page still shows the Core plus Discipline exam.
- Korea CFP, effective 2027-01-01: the exam fee becomes 249,500 won and the certification fee 226,500 won, both including VAT. Reinstatement adds 9,438 won per month through 12 months, then 113,250 won per year up to five years, on top of the certification fee. Education adds a financial-planning psychology module. Continuing education becomes at least 3 ethics hours, up from a stated current 2, plus 2 psychology hours. At least one credit in each area must come from FPSB International. These renewal hours were not entered as study hours. Source: https://korea.fpsb.org/2027-changes/
- ACCA says the qualification is changing from 2027. The first new exam date was not opened.
- CIMA 2026-27 examination blueprints are the annual update. Tier 1 prices change on 2027-01-01. The new amounts are in the record. Korea's fee tier was not identified.
- ACA: 2026 professional sittings already use the new papers alongside the old ones. From the 2027 fee table, the Advanced Case Study is replaced by a Technical Case Study and a Strategic Case Study at 350 pounds each, and a Professional Fundamental Case Study is priced at 160 pounds. The student fee becomes 223 pounds plus VAT on 2027-01-01.
- CIA: Arabic moves to the 2025 syllabus on 2026-12-28. Simplified Chinese moves during the December 2026 window. Pricing changes on 2027-01-04. The new amounts were not opened. Other language switch dates, including Korean and English, were not on the page that rendered.
- NASAA retake rules change on 4 January 2027. FINRA retake rules change on 19 January 2027. On the research date the old waits still apply: 30 days after the first and second failure and 180 days after the third and later failures.
- IMC syllabus version 24 runs from 2026-12-01 through 2027-11-30. Version 23 runs through 2026-11-30. Passing the two units on different versions still earns the certificate.
- KOFIA must announce the 2027 exam plan by the end of December 2026. It was not posted on the research date. No 2027 KICPA plan was published by the research date. The KICPA credit and subject reform is already in force for the 2026 exam. AFPK's item and time cut started on 2026-08-22. The pass percentages did not change.
- FRM has published May, August, and November 2027 dates and the USD 600/800 fee schedule. No new structural reform for the next 12 months was found. CAIA's March and September 2027 windows are published, with the 2027 curriculum. CAMS remains CAMS. A fee change after the handbook extract cannot be ruled out because the English fee page was blocked.
- US CMA: Becker describes the 2026 replacement of essays by two case-based questions as already in effect. No further CMA reform date was verified on an issuer page.
