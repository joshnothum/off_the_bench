--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: courts; Type: TABLE; Schema: public; Owner: joshnothum
--

CREATE TABLE courts (
    id integer NOT NULL,
    lights boolean DEFAULT false,
    surface integer,
    size integer,
    location_id integer,
    air_con boolean DEFAULT false,
    indoor boolean DEFAULT false,
    price boolean DEFAULT false,
    photos character varying[]
);


ALTER TABLE courts OWNER TO joshnothum;

--
-- Name: courts_id_seq; Type: SEQUENCE; Schema: public; Owner: joshnothum
--

CREATE SEQUENCE courts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE courts_id_seq OWNER TO joshnothum;

--
-- Name: courts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joshnothum
--

ALTER SEQUENCE courts_id_seq OWNED BY courts.id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: joshnothum
--

CREATE TABLE games (
    id integer NOT NULL,
    creator_id integer,
    "time" time without time zone,
    date character varying(18),
    max_number integer,
    formatted_address character varying(200),
    place_id character varying(150),
    name character varying(150),
    location_id integer
);


ALTER TABLE games OWNER TO joshnothum;

--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: joshnothum
--

CREATE SEQUENCE games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE games_id_seq OWNER TO joshnothum;

--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joshnothum
--

ALTER SEQUENCE games_id_seq OWNED BY games.id;


--
-- Name: locations; Type: TABLE; Schema: public; Owner: joshnothum
--

CREATE TABLE locations (
    id integer NOT NULL,
    creator_id integer,
    name character varying(150) NOT NULL,
    formatted_address character varying(240) NOT NULL,
    url character varying(240),
    formatted_phone_number character varying(40),
    place_id character varying(150) NOT NULL,
    lat numeric,
    lng numeric
);


ALTER TABLE locations OWNER TO joshnothum;

--
-- Name: locations_id_seq; Type: SEQUENCE; Schema: public; Owner: joshnothum
--

CREATE SEQUENCE locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE locations_id_seq OWNER TO joshnothum;

--
-- Name: locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joshnothum
--

ALTER SEQUENCE locations_id_seq OWNED BY locations.id;


--
-- Name: player_joins; Type: TABLE; Schema: public; Owner: joshnothum
--

CREATE TABLE player_joins (
    id integer NOT NULL,
    game_id integer,
    player_id integer
);


ALTER TABLE player_joins OWNER TO joshnothum;

--
-- Name: player_joins_id_seq; Type: SEQUENCE; Schema: public; Owner: joshnothum
--

CREATE SEQUENCE player_joins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE player_joins_id_seq OWNER TO joshnothum;

--
-- Name: player_joins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joshnothum
--

ALTER SEQUENCE player_joins_id_seq OWNED BY player_joins.id;


--
-- Name: player_ratings; Type: TABLE; Schema: public; Owner: joshnothum
--

CREATE TABLE player_ratings (
    id integer NOT NULL,
    player_id integer,
    rating integer
);


ALTER TABLE player_ratings OWNER TO joshnothum;

--
-- Name: player_ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: joshnothum
--

CREATE SEQUENCE player_ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE player_ratings_id_seq OWNER TO joshnothum;

--
-- Name: player_ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joshnothum
--

ALTER SEQUENCE player_ratings_id_seq OWNED BY player_ratings.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: joshnothum
--

CREATE TABLE users (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(240) NOT NULL,
    email text,
    photo character varying(240)
);


ALTER TABLE users OWNER TO joshnothum;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: joshnothum
--

CREATE SEQUENCE users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO joshnothum;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joshnothum
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: courts id; Type: DEFAULT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY courts ALTER COLUMN id SET DEFAULT nextval('courts_id_seq'::regclass);


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY games ALTER COLUMN id SET DEFAULT nextval('games_id_seq'::regclass);


--
-- Name: locations id; Type: DEFAULT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY locations ALTER COLUMN id SET DEFAULT nextval('locations_id_seq'::regclass);


--
-- Name: player_joins id; Type: DEFAULT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_joins ALTER COLUMN id SET DEFAULT nextval('player_joins_id_seq'::regclass);


--
-- Name: player_ratings id; Type: DEFAULT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_ratings ALTER COLUMN id SET DEFAULT nextval('player_ratings_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: courts; Type: TABLE DATA; Schema: public; Owner: joshnothum
--

COPY courts (id, lights, surface, size, location_id, air_con, indoor, price, photos) FROM stdin;
36	t	2	75	87	t	f	f	\N
40	t	2	50	95	t	f	f	\N
37	f	2	50	88	f	f	f	\N
41	t	3	50	96	f	f	f	\N
38	f	1	50	89	f	t	t	\N
39	f	2	100	90	f	t	t	\N
42	t	1	100	97	t	t	t	\N
43	f	4	50	98	f	f	t	\N
56	t	2	75	114	t	f	t	{"{\\"height\\":1836,\\"html_attributions\\":[\\"<a href=\\\\\\"https://maps.google.com/maps/contrib/112524224141505735862/photos\\\\\\">Trent Witz</a>\\"],\\"photo_reference\\":\\"CmRaAAAAUCuu1HJjldyUeGqcWvy_EEe1gn5xqPNYojRLTr-VDIa41UQ8LSOa_ygJXE7KrNZ2ashq5BbQMRTXBqqoJc4F7UIxcU-v-oGx2HV0hODCzJo-lgFgKnyZ3nBwwxNhMF0XEhCMdSWfkXl21Xyj0QQBiiMkGhTFKbew6EW6yIZg5-XxHfJLKTwWeg\\",\\"width\\":3264}","{\\"height\\":5312,\\"html_attributions\\":[\\"<a href=\\\\\\"https://maps.google.com/maps/contrib/117918803432963752989/photos\\\\\\">Jake Pendzimas</a>\\"],\\"photo_reference\\":\\"CmRaAAAAZpNTA1NX2BD8KDKgLZ-e9d8enoKFvTrLjKnJ-LDcJAamMrMYeTSXXTMW34dRHc_0ci_yoXnhEJcS7ZAMSzf1g2LfoDr-jWta7xFFkU4Mu8fJOjJ7BTZZZZ4sXQtTz_u6EhBjkW7fiI_UqQS_4FeijwjCGhRauiMoQstH_tliBt3laEaUFJHG5g\\",\\"width\\":2988}","{\\"height\\":1836,\\"html_attributions\\":[\\"<a href=\\\\\\"https://maps.google.com/maps/contrib/112524224141505735862/photos\\\\\\">Trent Witz</a>\\"],\\"photo_reference\\":\\"CmRaAAAADa3lmfbWqDoAa5BSFasvfOY1EHH2rDnrG4RxuDzw_HQ1fKMy6w_VxR8xj6Veu6nVUlnjPpch1EVhTgsAbZTv5QvY85cXBNC4BAyLt4MZ2QD9aMZKj2FNTPJahrmWukCIEhBKMzJadNcm-SXNdViaJVGjGhQWL4LeqXpmsxwEwgKL3-DbXC-nzA\\",\\"width\\":3264}","{\\"height\\":3264,\\"html_attributions\\":[\\"<a href=\\\\\\"https://maps.google.com/maps/contrib/115403483877962902786/photos\\\\\\">Nerdy</a>\\"],\\"photo_reference\\":\\"CmRaAAAAdYmzXzwGt7l-kI-ziaAriZnjz1Scs-lX1azDV15nTnhdg7avJJSnm21M3XXHERvzKTcN1yBq7cnd6N8ADbrCkFZJROP0Mqh9tuUA1T7bB3ix3yfx2NjgQBKO2G3LVWj2EhDAstoCE2jwH158iLc6GZvgGhSTajTWWfQes1XeMqugZnIJjAuz6A\\",\\"width\\":1836}","{\\"height\\":2688,\\"html_attributions\\":[\\"<a href=\\\\\\"https://maps.google.com/maps/contrib/101137353328304094049/photos\\\\\\">Xavier A</a>\\"],\\"photo_reference\\":\\"CmRaAAAA-64KH4IGz-xvsQAWK0nOR3YZ6MeZo_CKWLKFWJ0VvbTSdwvBFM-_LvhYMQZaJReJdv-0FPvW35kG0vpGR3OrStVZpMguB1MHoZfg6zW5LfM4vkJH9xM9KFTd9zN7M95fEhBJ1T13QifBwVXdKSTuyAaPGhRrqPz8EXat7Jz9AO4jttIvhRjX6A\\",\\"width\\":1520}","{\\"height\\":5312,\\"html_attributions\\":[\\"<a href=\\\\\\"https://maps.google.com/maps/contrib/117918803432963752989/photos\\\\\\">Jake Pendzimas</a>\\"],\\"photo_reference\\":\\"CmRaAAAAQB9LqlJEF0jj6a0buQKhrZFLpocRfCIBVg71Nbm_c4Lxyma3M6hozc62sAxKEQkbU2qMadyeP2fRqkfCJAV3wTsTlU580ErJ7Zs7YLkHMX0Lcm0A-EyeV0GfqHKbMHzEEhAaActWIKN4vLULrm-EYk4dGhQHCxpDbjPlxtZtt-ynNaxdY6dx1g\\",\\"width\\":2988}"}
57	t	2	100	115	t	f	f	{CmRaAAAAmzhsbYJEAur0TBjr2_OyA8hOvza-HUno7C29neTdHhFDQNW945A0EqWisESXe8TytkyuBd1A4Wuz2C5osrZBKFZiFbGhsVR0S3PSzZ6FbOOIoxNKCdFMIo6q0fwmc_YvEhASJxbhI82BVd58Qf-r791HGhQS9my3Al2ylzyMyq9vg6dF1rXSag,CmRaAAAALBpOZPxZU1y24N9qqofutN1wSVlPdwrcVvqiWf7S6M_ZgTN7OSVlBy7-fkkOA6PpQ-Hv5AmjkVIdbuLyDtcV3r0sBZEaHgSH4VYsKU4DyZr_EA0JIrIAYBw6-3_AcRGoEhAnq7s5DBrCDga7wSAOciSMGhQ5-XaWtHhvxq9xujDOvmn-oJFBcA,CmRaAAAAfMP0uat2sNfsF53O1pzmSu7KpmL9NVoTr7sRg-fxrNd3twkx6RzVtqm7lfIzXzyvgGHcFjO23AMOYByD4gRpgZNzo8Wye8BM3835SnLuu9OOfGxaV410Bsuu2r--qNgOEhAxQzAfuNDL3UeHlwcw0Bp6GhSIjl1d9Yc_avaWDVwK2mCq7w1a5Q,CmRaAAAANHJV_aWnTNr-NqYqxw8vAgVbncWD4oBXRCTueHhTqE5KP3liGdxwHkIgqANDJ6UaNEFkuh536iWir1otPX--vbxc75ar29g9Ux0qR2zABns6Yl5aG-KbY0vVW6uj5GNWEhDWIiaK_esH2H8UXoxEcax8GhQM7nhvQ_shXSG6Zv5nKRbKdk23hg,CmRaAAAA6uaJvYvow95juQme9rnjXhreuHAX-eONIMnx91purHSIOKGOUY7lTJy4R0XC8zxuLxcUTFAqEOgZGL8Ku0byzgim4_dxvnNH1-EKA9f474svoA_tigkQEhpDZGKo5iqnEhAW5-pd5nJFQLJDq3yWgTErGhRsHP_X_Nsi-9iKz3OvjIAqFrsW6g,CmRZAAAAiR1zGMJvVE03kU7wJRYZ2ITlKvq1a6MB1yGZ02vDcxdY2aEsl0YwYroMf1_M4vzTClYOAzODDltXqrkbzu1iRFBIQRsV0WuVJj_4TtMA7oLqR4vEEKjJLLa_14yGbc-GEhCzR5pgm44e8ajicYrgL_FNGhSKPXzLlG_M80MdhUQnCpVaOqvgrQ,CmRaAAAAn93UmrEzd8xTDdVT-BDq_6VnLgX_isevFIqenBafLxFF5xqGUpTbvm6pdHRbT-_yQ0kj4j6_nixn8lOr9BBtMB6lhNYyc175Thvoc9DAj4m9vMkketXwnXL-ITQtr7mDEhBdIJnyJU528yvcZU1l_VT_GhQKhqdgCNCVIAlAwV8tn7FT_ra1WA,CmRZAAAA2dgjLRoGixORPgT-B7bk-ypz76JG1JPp-Rr2Erli2la1Hn2Aj_2qE776untRLGTND04LliU6dqLBwf63k69bG8giShkX9lFqGZrwb-uHN4WVQkkotc2TcZF-wBbGIyJQEhATBo4kGItu2y4KY-hiWqtVGhStxSfzR0frP175BHH33sE7szIZ0g,CmRaAAAANUtLVyybLrizr5ZbiyfCJHR4c0gZfS2P6R7mgu6cGH4mDON9JGJSLLMQyDH6HGv8XQL1bpQ-TjalEdN8BEOg4Jewtx9vZ7loFS2sAAyUMhKc6Z7akqNoAsW-fX5--8IoEhBqOa9OLYi-JAR0wbDgBeVaGhQR7AnjvYMWuUKQebOx1lCCpOFZ5w,CmRaAAAA4IwgEtfBGqBtAVSef6No5K4hCT2VTP1440Rp_rmhT9RHNAzjBWAvxclbV3DjbACdkNshUXVanfCh4Pq7eE-3wanJJGk9vYBpol36FDZ0HtbV8-ZPNO1HcI0izU5R3cZMEhDr5DpKkaT-qiuH2EkXyNPuGhQWtM-kbZGXGuEn2XGBGwag6NubGQ}
58	t	1	75	116	t	f	f	{CmRaAAAA-jF4oGwL0dIXKMS6BjQv1zHU5rKAr8qKBojaPzO7zB-TEE_4LR_opdn2j-DXs6m-4RqR9iij87yxlHZSOaEbdY8Bf-0IEuvG58ZbAjN3yS5Ek75TQnLUy2-X5ekbtSFWEhAAwFXarO9f1qBo1Tcfg9fxGhTY_2ANJ9oBgc6dgVEdIYsfpNg15A,CmRaAAAAVJVctpp8-hdIzDq29gWOltJgGgo14U1RzLPV0WSci9mINO5PQSh1lEK8W96zjTIgvGYzTyC00AqQ0EiXNTHsC_cRs3E7ngWhkQpqU1oTNYjz4VYdO2YnrPVqye5i7dOHEhAGq6MFO1r8BMvIlVQ-kJVFGhSXIzrWvYiAg2_2b9QBFKzwmngfVg,CmRaAAAAzl8pjFKFsV25r7sPwniE2QrsaYYwPzZihks5YaDO582kUN0R3FkymHrVOXt2aRru8ztSMDm4-fhX4jUW3RzXS3MK-rpoRoJ9VaV9N3p12eqPWBRTU5RRwJJvqoeqbbb3EhDBH2C__SqdJFyb23Zl4uzpGhRrH_ComViE7fjCDZIBfsMB_AUeMA,CmRaAAAAvDrcYfRubYa2ETD3F-cwUglYSL1hHDdcEi61u0C_y9pRjVWiMYo9GMgegBDFij4QUmauyrJ-FoB3CX6BJcbkyvEU6dCE-Ol_dxvBtjIf8Xi7sPkT-E8C5SkCfCgFBa6VEhA6yWSDmg9WswXjc8yFGhIGGhTZaEgk0x3Sx7c06G1loond21Xl2Q,CmRaAAAAcSDPmxtowfc4rUdK0Q674SYYU6XCaI95kEBZTR5m3H-n-8aeZoMCAN3doTr6in-E3NtqM3tpRaXHkAdjm_XG1sddPEJSoir8IdLyThzeynS7VK2eNJl8Rn4zV9zmBfzdEhASY5rX_r5hUyLmnej9fBl0GhSHDb31GlZyPQT1xJ5PvzNLJOBdWg,CmRZAAAAfHLFY4ePE5pFDif4qS0grxcVJnbCkElSMDbkgpaK30F_uGRE_MX64coVtvD24lJ-HTrQjBwIF_-uJyyDFVoWKr4192bb36cocfe1s25papJYQyK0zoiN0HvaA0NaZlMQEhAzHt67o_NVycNtNqbxXFHVGhTPkgxZ_fB2o3TQoZ0ekxr68EJVOw,CmRaAAAApxAUUD0ygRuqWKG6pr8AbT9jJqC2hAbnQwClUrf17-j4H96CJDu4nzEoCnrMV9SMQpvrfMiKdXMNvRqClIrKU-DadCTLecvGUhu0Oz-tWWO-CUDCmR5eiB7nC9FVWPr-EhC6AQ9k91TRcObDTcqmeSCGGhQ62s8RIOlVEzVY2r80y0VtV7KLCA,CmRZAAAAbi0mynqzYsTIst1r8MzdquGPfdVuUFRKmtGnA3JVzD2eT999XPHI229tpNhJD9WtC0tv_7C-ByWsUl1-r8VUy2ifvhfcDHGjKaoVCuPEkIn19l7Obk0Zk2C27zbTTK1AEhCOUecNIyFEkD1T5y1EyJS-GhTgNAM9XlomhAfPJe8Z2Z3ARLVLlQ,CmRaAAAATo7-P6K-OezwZylDxYLhp-BoQwkK75lE016KBcz0sZ0t2WyRI886uO2-EvEvZXJZozrIUtvCd5AcJs0fGunRETsFLed8MxyYtuNNmSqvDWEFb-ceFObQo5qu8IGAXzEuEhCbuRsJM51sYbRAV0Mta7xIGhRTquCMwgI6uH3ix7eGg8qvCHp3CQ,CmRaAAAAIj48KjhMI4qn80xq6VizqZUV3DOAl8wpfQ8HX2Uv1lgFb0e4RAx2r2K0awIgikRXiYmG5fY7b4A1I2jcBhyr6XLI5C0wGxRn44khtJn37_WVgL5snT_GRIB98n1UiJe5EhD4FeWRCFmBSoJTP6SMAWKtGhTHhx2lHjo5VQVWHBM5wRcioxX8TA}
59	t	2	50	117	t	f	f	{CmRaAAAAbn_Tm27lK46JxR6WXqrzcNMbgNvAavuUOr7GrjDoHY63MS8YWrBfFNGFATn1JSfyxRSQZHKOsmPkg2WMk4tdlMUZHdXdQ4-r7qxsevV9a0s87CFU1NNzM3A4kYkqFTg_EhCMzh2WIO7XiKvs2uE_d9-3GhRNFi1lw7kzEwZa2ds201Qe7jwsCQ,CmRaAAAAxoSZIWwD2-nXx9iTi11va9Wu4Jeg0sRGP2d14GwGIEqiWT_VgXK8vC9QdygiC07zPb3rDBj2MSkPV6gk6qmhD08gslaU3ljBY4ldvsrCR_169Ln1TcAWrdgCbB31_iELEhDJzhMnJrYxCc3oXtnGTJw_GhQj23zdvWFgOB4sjIGXKEcj5p0kKA,CmRaAAAA9V4BYpgJR8IZBeypafg-YJqktq1mhWJxulQtmqkNGnGNelFHGLlSv0qKnMXY4--eNyEUPNXEzLG9WwbM1ur_xWnfRkWeD67RhDHba-vNKnxEEqSibmoqoCruSVj_e0eXEhASLT_NCVVSQsgZpiuIdzdCGhRzbUoHrNfR3hIlH2YDJ25zf3Aqlg,CmRaAAAAwLHgNq8Uhk0-frGJN5XFApwXSJHZ8wSkCjWY5E4J0NlcVpCY7YhhZgY81q3neh4bBlOE_ZPt5pVTjAhLqFyFoHMcm1lzrg4ducNXhnL9An0ydk8PWR8O4fhXFmmPwaS5EhBQjyeHBTntMi9WSMk3kiUUGhTOkHoJ2REMzRLmuvf6AquFb3-NTw,CmRaAAAAjMZ6K2yqJJiAVDSovC4D76SEnVOFXSFouH3ifxxb-BEfvH6AMy8FOmHGdFEJiMU-OlZFQnxqe35xhjVUyDpHshQGM9PI6tBDIIjZkWDcscbnIFK-e7FFS8dWZCnw-rOWEhBNCxs9Kt0rTr2D77Iz2QNPGhQoPilo9G2sTWr6Bj7cOqYU90nPjw,CmRaAAAAqHafnOfCGtoANgRbm9sbJpJNfB_C_xLuvehNzKyV4lfv1hho9Bxw2s2pSV5O-dYJfrxgfC_KIE-FoTTuRiBJCxTZHmte8vGYlmYFjFMTAIGDDXv9uEMkVY9K3a1FMDnFEhAy9SaopRsX1hCj36Bf9wJFGhT3egFiaDSqZQvXMBMZvGHVYQNKjw,CmRaAAAAM2X0OIKogsBlNbZLPTE2F_63I4bTDrZiq3cKfiCcM42W67ChCwq3UfwfRw2NpGQBy1uF64MMb41fIquAHK6ZJa5I_a8pq_30eh3cW-PSpC9TnnSEnTbLKxxAZqUVStgSEhAWnwJ4cZRqEK7YBGA7wvWrGhRtmdNUNIpWIbIR9fqYiD9cVuMg5w,CmRaAAAA2jO3ola1_9wnIKswgyFYG-j3PVzm56womO6Wa_J6xsc7ZtWEbDBOiSPX6b896MvEdkVbgfJM46JJ2qrdYPcUSbrqnI25BYMW0h5xbjGa7NQl246iHBpUJ5jTW8t1LDs-EhDzlnrVcHLgwC_7pGnD45WJGhT8svzoC-XMGQCBZqnCU_EzbfzCfg,CmRaAAAAAtFU6IoCt-7V8eyqdvH2W8fuMxpRoBpPg63a8_k1Bm2Grb-JRGCSfr7QwWit9yaHxgXYE2Li1Q83CEWnfjEqwrHMYPUDG9Z3CVoe4OHf3sBSA5Q07YsihIFS5jPtL3zDEhDNYML6om6nB8EwPLL1eg7bGhR83x8OCN_OPtpCs8dqs3gTS3V18A,CmRaAAAA46Z-NIocPF5L5jzdyKsSrO87G47ZYUgk540rrTWT9nf6C_8vbFhLkg740T-G8VcyXrbQ2S3o68CUb6yry0LEpLcgE09gG9mDNDZCBAyAnd9wAK-FOltSSJ6I1uxEQkmfEhDeHVN1YzHf4Ff_oPwHaEDoGhRkS57ebcm7tOjMlxjxEuBZVjaJwg}
60	t	2	75	118	t	f	f	{CmRaAAAAwQ-62ikc6iWGzi0oVT2oaQvr7PCOnpO3z45sEKFj7YmCQyD0D78xrfFQIxBLXRqRS_IW1Jpf9bT2ASHAA6LwO3JxoarDm02qJkhfWIQ5ivuWn484MW42ncS7II4PTkgZEhAngTncmdo3JfF4Ez3FpoK8GhRScIGAy97MAe_HNzf8mOguPffPXg,CmRaAAAAoV1-ZW4QZoz9AHqphC4Q6vmvg8xiaLFwanMvaDNeqJs0gxQBrr0NxmgGfdxmwyCW7va0pVVqLUDBsasTyTmxIDYroTQ3g1UGjh2YHZyqLyBKbN2szDeb5w2fxmYJki21EhB4ax7_Zz_6JHjOlPMluRihGhRtqMXhbhkukq56GHS8FjbbnyI4NA,CmRaAAAACIancMDxPLM6jf1my-B1HPEaFgNzEtX58erTk5SMq2ZIDZKHaUizQEpPJzOiVCEFP9wq8oqLC-Bi4wH2H57xoW3hoklTPLn6vqWmQMSKRr2Xs2JBx-u3dsLPUEViBqvREhC_59W9YP_DzHq0u7T5gpORGhTl9rODfDYG1o42JobCm-TuMCYDJg,CmRaAAAAvkm75n3dfz_mK3bj4ybevycsAHiKQn0IBgsdJRdsRU2xTP28KMY8oCwjgLo4ayLhWy-Whj7CpND8gbfzci7sm0Z2zfQydfVxQVm0fBnpvE5YUr7gHnoWWAZM8PsFAhWNEhCyIg9wbEyizLvh8Jk76tGPGhTgHVKuiWar6t09n6RFcK-n-hfNgg,CmRaAAAAn0EaEf6UVlhq6zzQsxGuf1F3AXIJbLbmilsfRslvExo0cyLsJAfj3iP98DXIrZmAeMnFFECJatF3ldEwYrfxGpdhtlXDoeN2Hdhv-qehpeLRiq4wO5Yll-1jAFCKBtDBEhBw-g6Ohph5fHiCquWTFHGrGhSn0WA7lhxAt_xdb1l85Bq7Ks6Wag,CmRaAAAAeoiTIiAbwPbc7QgvnSSmJJpHcwhhaDjt2Z60ZCsIvJSYnOs5E7XnjClbykcR829QzfDy_1niLHhrXfGM2_yTFs0IjmIXBUa9QuBwMaZJd5uOx5ErEkyGEholvHtjLeypEhAGQZBNXRWnAtrSB9vmf9IWGhTB7CoBQpK1G8vQfAvxAvxCiodUmg}
\.


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: joshnothum
--

COPY games (id, creator_id, "time", date, max_number, formatted_address, place_id, name, location_id) FROM stdin;
42	2	15:00:00	12-04-2017	15	277 N Cypress St, St Paul, MN 55106, USA	ChIJ85x3i3fV94cR5pF5isxiKTE	Mounds Park	86
44	2	04:20:00	04-20-2017-Thu	20	7601 42nd Ave N, New Hope, MN 55427, USA	ChIJ-x7M95o2s1IRG2Y5ysjo0Io	New Hope YMCA	94
45	8	05:00:00	05-20-2017-Sat	15	5008-5098 Wren Rd, Mound, MN 55364, USA	ChIJ9dysiU1Ts1IRRt3Cvf75yOE	Three Points Park	96
46	8	04:30:00	12-05-2017-Tue	15	7355 York Ave S, Edina, MN 55435, USA	ChIJa1OlZxgk9ocR4DNB7zI77Ho	Southdale Branch YMCA	90
47	9	05:00:00	12-10-2018-Mon	15	2100 Orchard Ln, White Bear Lake, MN 55110, USA	ChIJNWL5DVvRslIRFNnTyOWepkg	White Bear Area YMCA	91
48	10	05:20:00	12-06-2017-Wed	15	3575 N Berens Rd NW, Prior Lake, MN 55379, USA	ChIJP2jAE0UW9ocRVQWHcrEUw38	River Valley YMCA	87
49	2	05:00:00	12-10-2018-Mon	15	1002 2nd St NE, Hopkins, MN 55343, USA	ChIJB9Ln-lwg9ocRAou8ZdYSD1c	43 Hoops Basketball Academy	97
50	10	03:00:00	12-04-2017-Mon	12	Edina, MN 55436, USA	ChIJCx9CTaMh9ocRQPVMMTLE368	Walnut Ridge Park	98
51	12	06:30:00	12-12-2017-Tue	15	2145 Ford Pkwy, St Paul, MN 55116, USA	ChIJUQz2J3Yp9ocREfFrYCmWfh4	Life Time Fitness	99
52	2	05:30:00	12-05-2017-Tue	12	277 N Cypress St, St Paul, MN 55106, USA	ChIJ85x3i3fV94cR5pF5isxiKTE	Mounds Park	100
\.


--
-- Data for Name: locations; Type: TABLE DATA; Schema: public; Owner: joshnothum
--

COPY locations (id, creator_id, name, formatted_address, url, formatted_phone_number, place_id, lat, lng) FROM stdin;
86	2	Mounds Park	277 N Cypress St, St Paul, MN 55106, USA	https://maps.google.com/?cid=3542471212539679206	(651) 632-5111	ChIJ85x3i3fV94cR5pF5isxiKTE	44.94952799999999	-93.059185
87	2	River Valley YMCA	3575 N Berens Rd NW, Prior Lake, MN 55379, USA	https://maps.google.com/?cid=9206224815638644053	(952) 230-9622	ChIJP2jAE0UW9ocRVQWHcrEUw38	44.749289	-93.448703
88	2	Minnesota Timberwolves	600 N 1st Ave, Minneapolis, MN 55403, USA	https://maps.google.com/?cid=18441378134197231239	(612) 673-1600	ChIJe1j2u5Eys1IRh1572bTv7P8	44.9795281	-93.275989
89	2	Moundsview Basketball Association	Roseville, MN 55113, USA	https://maps.google.com/?cid=2787632085284069145	(651) 631-1943	ChIJAQAAAFHV94cRGZ_Wr5yoryY	45.00607670000001	-93.15661070000002
90	2	Southdale Branch YMCA	7355 York Ave S, Edina, MN 55435, USA	https://maps.google.com/?cid=8857519657079354336	(952) 835-2567	ChIJa1OlZxgk9ocR4DNB7zI77Ho	44.8697376	-93.3198893
91	2	White Bear Area YMCA	2100 Orchard Ln, White Bear Lake, MN 55110, USA	https://maps.google.com/?cid=5235046326618806548	(651) 777-8103	ChIJNWL5DVvRslIRFNnTyOWepkg	45.0424294	-93.011298
92	2	O'Leary Park	3542 Widgeon Way, Eagan, MN 55123, USA	https://maps.google.com/?cid=5318748574610546818	\N	ChIJ0d0YU7wt9ocRguBGD6b9z0k	44.8288017	-93.15224189999999
93	2	Monticello Center Court Club	Monticello, MN 55362, USA	https://maps.google.com/?cid=16471553554370684218	\N	ChIJZ9EM4uRhs1IROmUWC7C2luQ	45.30109299999999	-93.783502
94	2	New Hope YMCA	7601 42nd Ave N, New Hope, MN 55427, USA	https://maps.google.com/?cid=10002750721473734171	(763) 535-4800	ChIJ-x7M95o2s1IRG2Y5ysjo0Io	45.0316706	-93.3773561
95	2	Minnesota Timberwolves	600 N 1st Ave, Minneapolis, MN 55403, USA	https://maps.google.com/?cid=18441378134197231239	(612) 673-1600	ChIJe1j2u5Eys1IRh1572bTv7P8	44.9795281	-93.275989
96	2	Three Points Park	5008-5098 Wren Rd, Mound, MN 55364, USA	https://maps.google.com/?cid=16269528526376590662	\N	ChIJ9dysiU1Ts1IRRt3Cvf75yOE	44.9448161	-93.6524439
97	2	43 Hoops Basketball Academy	1002 2nd St NE, Hopkins, MN 55343, USA	https://maps.google.com/?cid=6273253517989546754	(952) 294-4667	ChIJB9Ln-lwg9ocRAou8ZdYSD1c	44.9282802	-93.3875577
98	2	Walnut Ridge Park	Edina, MN 55436, USA	https://maps.google.com/?cid=12673063596298401088	\N	ChIJCx9CTaMh9ocRQPVMMTLE368	44.8992121	-93.3919524
99	12	Life Time Fitness	2145 Ford Pkwy, St Paul, MN 55116, USA	https://maps.google.com/?cid=2197358772658893073	(651) 698-5000	ChIJUQz2J3Yp9ocREfFrYCmWfh4	44.91811299999999	-93.19075430000001
114	12	Minnesota Lynx	600 Hennepin Ave, Minneapolis, MN 55403, USA	https://maps.google.com/?cid=8144434990394960203	(612) 673-8400	ChIJe1j2u5Eys1IRS-nAAnnYBnE	44.97869809999999	-93.2747749
115	12	McDonald's	7355 E Point Douglas Rd S, Cottage Grove, MN 55016, USA	https://maps.google.com/?cid=16615519040199423439	(651) 459-9415	ChIJRdVFwD_Q94cRz3XTxYguluY	44.82955	-92.958739
116	12	McDonald's	7355 E Point Douglas Rd S, Cottage Grove, MN 55016, USA	https://maps.google.com/?cid=16615519040199423439	(651) 459-9415	ChIJRdVFwD_Q94cRz3XTxYguluY	44.82955	-92.958739
117	12	Better Basketball Boot Camp	5394 Edgewood Dr, Mounds View, MN 55112, USA	https://maps.google.com/?cid=4667021550384590847	(612) 845-3393	ChIJn3NXw1cvs1IR_y_EhV-XxEA	45.1040457	-93.20301339999999
118	12	Minnesota Lynx	600 Hennepin Ave, Minneapolis, MN 55403, USA	https://maps.google.com/?cid=8144434990394960203	(612) 673-8400	ChIJe1j2u5Eys1IRS-nAAnnYBnE	44.97869809999999	-93.2747749
\.


--
-- Data for Name: player_joins; Type: TABLE DATA; Schema: public; Owner: joshnothum
--

COPY player_joins (id, game_id, player_id) FROM stdin;
74	45	8
75	46	8
76	46	9
77	42	9
78	47	9
79	47	10
80	46	10
81	42	10
82	48	10
83	48	11
84	47	11
85	46	11
86	45	11
92	49	2
95	50	10
96	48	8
97	50	8
98	49	8
99	50	9
100	49	9
101	48	9
107	52	2
114	47	2
115	52	2
116	50	2
117	46	2
118	46	12
\.


--
-- Data for Name: player_ratings; Type: TABLE DATA; Schema: public; Owner: joshnothum
--

COPY player_ratings (id, player_id, rating) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: joshnothum
--

COPY users (id, username, password, email, photo) FROM stdin;
2	BananaBandit	$2a$10$IrjHq01696uq/0dDEeTDEu6oLs0tYmW4bqQJYBQOOyTNIGc2m.uX6	\N	\N
5	HeBro	$2a$10$Ja6D8Hzx5Zhdqq3VDzR/.eGx6VMiibwiyMoTSKGDP5INaDlbQG3Dy	supremekingballer@yahoo.com	\N
6	DaveGrohl	$2a$10$YCihyAPz4W84f1/0Ost03OFxlzOAepmnvBNX1UvN89S/AL7kTUlWa	email@yahoo.com	\N
7	ZoroFlash	$2a$10$JOcwyF74vbX8dzfAllIJFOjRN8OTcA1FKA1Il/WR/Ir0CE2.9T1.a	thwerwe@gmail.com	\N
8	Kevin_Durant	$2a$10$Eim6shBi137NjkrgCTEQFu3/H0QIB0sjtaUeivIO3PN/HA3u7tGTq	kg@hotmail.com	 https://nba-players.herokuapp.com/players/durant/kevin
10	Jimmy_Butler	$2a$10$Z03oNn3x1y/f0Vv9w/Y6luMjUnmlW/UgLH/UVjjJ5IU9nP772hOGG	jb@gmail.com	 https://nba-players.herokuapp.com/players/butler/jimmy
11	James_Harden	$2a$10$Eo3utEu2nm2ednPq6oh/P.ytyZ7p86luVhQrng1JCw3kMpvyCKV8S	jh@gmail.com	 https://nba-players.herokuapp.com/players/harden/james
9	Step_Curry	$2a$10$NHImOrkOhbcS9uju85VYheCWbUT.pAMRxw8.0Yav5hP4bmKghxUzW	sg@gmail.co	 https://nba-players.herokuapp.com/players/curry/stephen
12	Josh_Nothum	$2a$10$Q/jrFk9QW//wXuUhYyj.EOby/7MFTAfUKPw0joNsldpSaU3Bz/ZQS	joshnothum@gmail.com	https://github.com/joshnothum.png
\.


--
-- Name: courts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joshnothum
--

SELECT pg_catalog.setval('courts_id_seq', 60, true);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joshnothum
--

SELECT pg_catalog.setval('games_id_seq', 52, true);


--
-- Name: locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joshnothum
--

SELECT pg_catalog.setval('locations_id_seq', 118, true);


--
-- Name: player_joins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joshnothum
--

SELECT pg_catalog.setval('player_joins_id_seq', 118, true);


--
-- Name: player_ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joshnothum
--

SELECT pg_catalog.setval('player_ratings_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joshnothum
--

SELECT pg_catalog.setval('users_id_seq', 14, true);


--
-- Name: courts courts_id_key; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY courts
    ADD CONSTRAINT courts_id_key UNIQUE (id);


--
-- Name: courts courts_pkey; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY courts
    ADD CONSTRAINT courts_pkey PRIMARY KEY (id);


--
-- Name: games games_id_key; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY games
    ADD CONSTRAINT games_id_key UNIQUE (id);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: locations locations_id_key; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY locations
    ADD CONSTRAINT locations_id_key UNIQUE (id);


--
-- Name: locations locations_pkey; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);


--
-- Name: player_joins player_joins_pkey; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_joins
    ADD CONSTRAINT player_joins_pkey PRIMARY KEY (id);


--
-- Name: player_ratings player_ratings_id_key; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_ratings
    ADD CONSTRAINT player_ratings_id_key UNIQUE (id);


--
-- Name: player_ratings player_ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_ratings
    ADD CONSTRAINT player_ratings_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: courts courts_f_key_location_id; Type: FK CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY courts
    ADD CONSTRAINT courts_f_key_location_id FOREIGN KEY (location_id) REFERENCES locations(id);


--
-- Name: games games_creator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY games
    ADD CONSTRAINT games_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES users(id);


--
-- Name: locations locations_creator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY locations
    ADD CONSTRAINT locations_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES users(id);


--
-- Name: player_joins player_joins_game_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_joins
    ADD CONSTRAINT player_joins_game_id_fkey FOREIGN KEY (game_id) REFERENCES games(id);


--
-- Name: player_joins player_joins_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_joins
    ADD CONSTRAINT player_joins_player_id_fkey FOREIGN KEY (player_id) REFERENCES users(id);


--
-- Name: player_ratings player_ratings_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: joshnothum
--

ALTER TABLE ONLY player_ratings
    ADD CONSTRAINT player_ratings_player_id_fkey FOREIGN KEY (player_id) REFERENCES users(id);


--
-- PostgreSQL database dump complete
--

