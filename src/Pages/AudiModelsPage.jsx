// AudimodelsPage.jsx
import React, { useState } from "react";
import "./AudimodelsPage.css";
import Footer from "./Footer";

// Sample car data for demonstration
const carData = [
  {
    category: "Q8",
    models: [
      {
        name: "Q8",
        image:
          "https://mediaservice.audi.com/media/fast/v3_xWTW2gcdRjF__62SXQzs5vZdDeZzZiRzMwmINtuZnfTBF01GsRAQ2NbW7CVONnMbjbZW3Zn04T6EATRF32QahGFttD2wbZQ8YKXFJQitXgX8QaF-mIVUkSKt_ZBJ_A9nIfzO3wP55y9LtpaDcGBB8_e6Pmn_fa9VxFipS5E4Jxo81qN2dptQohpgqWKU3S3L9TdYo-2NJp0V7yks1zfbqfsbHJptO4kM5VC0imXw6LDB0RAiI41IdqOb-Ii1N1qlOtOw6lsa7jNeq3aLC27ytCIY-fT2XQhMztbGMmn7bHZdDpfyI_N2dlsfjRtp1xnLOM4qYgf8YkI-Olia7WYzxcataqXzsy5zUWvVl8pi_ZMxUut2GLL5jvcpXPnL8T2EHsb1UK9F_Um8XHiR4i_Tvxd9CT6GfQP0D9D_5oB__7EmMB4EuMGCUFigsRBxANIDeTThFWiLXoP0_ct2gLaQbTn0JoM_Ib5KuaXWH8gthG8B-VFlJMoF4h0Ez1CbAdx39-NNog2iRnA_AkrirUf6w2CbQRPIQ0ijSDdh-wRyqBMoawRqRBZJ3qN3hOoVdRPUf8mvoHRjvEvZhjTwJzBPIZ5GWuCzkk6_0J6i8jDxE4jf4X8DvJ15Fso96M8geKgXET5gsjdRLJEdhHZS2SJ6POol9AeRXuf_iv030Lfgq6gWwz8jvEyhoexjvERxseY-zD_w1KwBrF2YW0gnUQ-inyN8Gt0PUbXFQwbY4zeFvF1JIXwD2x9k-gisWeJfUjPd_Qu0PsM-iLWAawlrFewLvudQ3QgnuKOqwQfIribYJ3gJTodOlfpfA9JRjqDdB7ZQX4B-UdCMiGV0BrhccJPEz5G1xDqS8R_pu9xtHNo39B_AX0H-n70ZQZuYgyhTKLuRl1FkzA-x_gVKYDUR2iD8AZKG8pRYoeJnSB2kdj3fvGOu9Xlkl-4ilv1clO1qfGZR2qtpps4VJrz5nPDY3YqMe-WivNebjiTSSWccn3eyRWcsm_JOxW34eT2eP50ZsZn7JlUyjdU_Sl5JX8Duelas7Spdm7iiabnuo1StehUi2U3N5xNNPO1us8fWnRXm-5Sy63m3ZydqLieM-d4zrLbaPpszu4OjO-b_h8Tv-L4yAMAAA.webp?wid=766",
        discoverLink: "#",
        configureLink: "#",
      },
      {
        name: "RSQ8 Performance",
        image:
          "https://mediaservice.audi.com/media/fast/v3_xWTW2gcdRjF__62aeruzG5mYjaZzZCRzM4aLDG7k12zQVeJBLWQYGxr6z1MdiebTfaW2dk0Gh-KIgqiD-KlgmjBWsG2UFDESwNeQC1iiBdQRKG-KU3xodhqi-Dk7Xs4v8P54JyTF0RH2xM8dMfJi73_7Ny1_xxCrDaFCJ0SHX7bm2tcI4SYIVypOWV3ZLHplnv15fywu-oPOyvNETtt54aX801nOFubH3aq1ZjoDAAREqLzsBAdR7dxEe1ue9Wm4zm1mzy31WzUW5UVVxly82P22Ohcyc3ks-M5Z8xOu-OlXGkuny2O2nZuLp_JlTJjaVcNLL4WocBdXFcvF4vzXqPuj2ZLbmvJbzRXq2JntuZ7ni12bMfhegP9PPF9xN9Ds9BuRbtC4jYSL5F4l8SHGCMYJzA-wdjA-I7BTQb_xpzEPIh5kZRCapJUETGF5CEfJ6bR06Zvjf4f0RfRH0Z_Fr3F4J8knyK5gXUZkSV8C8qLKMdQ1lEVeo4Qt0kEehV9CH0PyRDJX7DiWAexThPuIPw20m6km5EmkX2iWZRplMdRH0D9lp7z9L2FVkf7Bu0yiS3MDsx_SXaRTJGcI3mM5FmsSSJ7iFxCeh_1TuLHkTeRP0C-gHwV5XaUR1BKKF-gbKDeiJpDvQd1P-oyPc-jfYV-L_rHDPzGwFWMHRgKhsXgX5ivYPqYZzA_w_yS5AGSl7AUrBuwZrD-QHoH-Qjyr8Rep-s-utYxd2OO09cmcQZJJfYz3Y_Ss0D8GeKf0ruLvkX6nsZYwprHWsZ6Dets0DlEJ-IJrj1HeIrwXsJNIlEidSJrRD5CkpFOIJ1GdpBfQP6BqExUI3qY2ASxJ4m9SdcQ2sskfqf_QfRT6N8zsI4xhnE_xgqDVzCHUO5C24v2HLqEuYkZvBBC6ie6RWyLrv9QXiW-RvwN4p8T_yko3lG3vlIJCldz635hujE9MXt3o91yU4cqJX-hkBm306kFt1Je8AuZbDadcqrNBacw71QDSdGpuZ5T2OcH05mdmLVn0-lAUA-m5FeCDRRmGq3K9jW1jadavut6lXrZqZerbiGTS7WKjWbAH1pyH2u5y223XnQLdqrm-k7J8Z0V12sFbMHuDk0cmPkfmMGR1sgDAAA.webp?wid=766",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
  {
    category: "Q8 e-tron",
    models: [
      {
        name: "Q8 e-tron",
        image:
          "https://mediaservice.audi.com/media/fast/v3_xWSTYgbdRyG_33SdGsyk3QSN93Jjjt0JwkLNd1JdpZuKAEjPUR06dZqD9ayTjb_fOzma5NJ3KKH4kUR6kks9uCqqKBtUQ8WtT34AV4qqK0HEQTFg1XaihaqFRFnb7_D-z7v7_CcuyGCw77g2P3nbu3-e8fOR35EiI2eEIGyCHrDfqW7TQixRKjZdutydrUn67ut9YWs3PCy7qg3m7fzTnZ9QXr9bifrrMm9zloj67ZaUTHm90RAiLGTQgRf3aKISHzYb_Xcvtve15eDXrczaI6kNuOuzDuOa1dW7HlbVhcW5iu5-WrBzjmyZtdylYJTqVRrcxU75iPeEQGfLu7u1FdWav6mN-dU5WDN6_Y2WmJHXdYrw4rYvvWVCKYKc4UC91wjcYTEGRIfoN-L_h_JEskXSb5N8kOMlzFnMc9iXsT8EvMq018zfRtrG5aCdRCrjnWLzC4yB8kcR9yH0kfZRD1LVGd8yOTvGKsYj2M8hzHAPEDqDKmvSP-B2If2MbE44--S2E-yjhHHmMEokwqQ-p70-4SChN5E2YvqEXHQFok9QewyiT1MvIbeQb-M_iepKCmL1CbpOcJlwrdJvIX6GeoF1BtoB9COo7loX6B9S-wQsUeJrTN-Cv0TjMNM_cDUHab-xdyJqWGmmb6J9RLWM1iXsD4ndZTUX6Q10jrpQ6R_Q3kD9TTqr-y6RPIpJoYkL6JoRL8j_g3jqySeJfEpE2NMnCJ9DDGGeJq7fiZUJvQwoR6hO4RdwicIf4SioryHchPVRX0B9SoRlYhJ5EEiJ4mWiG6iv0LyJyYfwziPcQVzP-aI6X-wZtAeQD-MfgIjiHUF6xrKdpRJIteJXkcLop1Gex3tF1-R52Vn1PTVaMuOV1zsLpaWy93hQGaebFa9RjFXyNuZhmzWG14x5zh2xm31Gm6x5rb8yIrbln23eMTzXV8uLeeXbdsPdHz3vaZva3GpO2huXQ9t1TMDT8p-s1N3O_WWLObsTFt6btX13JHsD_xUMR8PlI4u_Q-eAU0oYwMAAA.webp?wid=766",
        discoverLink: "#",
        configureLink: "#",
      },
      {
        name: "Q8 Sportback e-tron",
        image:
          "https://mediaservice.audi.com/media/fast/v3_xWSTYgbdRiH_33SdGsyk3QSN93JjjuYmYSFmm42SU1CCRjpIaJLt1Z7sJZ1kkw-dvO1k0ncoofiRRHqSSz24KqoYFtRD4raHhTBSwV160EEQfFglbaihWpFxNnbC-_v-b3v4blwXfjHjuD4_Rdu7v171-5HfkSIjaEQvqrwu2OnNtghhFgm0OlZLXthdWi39hrrxbS94aatyXAhm8nm0-tF23UG_XR-zd6XX2unrW43LKY8TviEmDolhP_V7RYRio6d7tByrN5-xx4NB_1RZ2Ir8_c2C_VitnkgWyvlCqXCgYZVrOdrzUwxX7PruXpusZhreKtSxKs4J3xeu7iz36rXm95NN5dv2KM1dzDc6IpdLdutjWti5_ZXwm96TIm7rhI7SuwssQ9Q70H9j3iF-IvE3yb-EdrL6Avo59Evon-JfoXE1yRuYezAkDAOYbQwbpLaQ-oQqROI-5AcpE3k84RVpsfM_o62ivY42nNoI_SDmGcxvyL5B2I_yidEoky_S6xAvIUWRZtHq2L6ML8n-T4BP4E3kfYhu4TyKEtEniBymdjdzLyG2ke9jPonZhgzgblJMkewSvAWsbeQt5A_RL6OchDlBIqF8gXKt0QOE3mUyDrTp1E_RTvC3A_M3WbuX_Td6Ap6ksQNjJcwnsG4hPE55jHMv0gqJFWSh0n-hvQG8hnkX9lzifhTzIyJX0RSCH9H9BumV4k9S-wzZqaYOU3yOGIK8TR3_EygSuBhAkMCtwlaBE8S_BhJRnoP6QayhfwC8hVCMiGd0IOEThGuEN5EfYX4T8w-hvYO2hZ6AX1C4h-MeZQHUI-gnkTzY2xhXEXaiTRL6Brhayh-lDMor6P84inyvN2fdDw1enbfLS8Nlior1cF4ZKee7DTcdnmxlM2k2nan1XbLi_l8JmV1h22r3LS6XqRu9WzHKh91PddXKivZlUzGC_Q9992OZ2t5eTDqbE8PbeOpkWvbTqffsvqtrl1ezKR6tms1LNea2M7IS5WzUV_l2PL_ILE4eGMDAAA.webp?wid=766",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
  {
    category: "e-tron GT",
    models: [
      {
        name: "RS e-tron GT",
        image:
          "https://mediaservice.audi.com/media/fast/v3_x2SX2hbZRjGv_1q2tqcJJ5sOe1JYw_m5ERFYs9Jk6U6okYEp1Do6BR1SvyWfvlT88-Tk1qZFzIYeqOXQ3fhRFAYrqh44WDuQibDIQxkFw5FVLzxYopQKCoinnr78jy_54XnOf-biIx9wbGHz-_M_jk5ffQnhNgaCjERFZFg7B8f7BNCrDLT6cmWWtwYqtbsPSrwB_2C2goKcnO4WHSLpcL_p0ePFlZrhdoTZW-rUHrcK8huNyGmQr-YEGLqVSEi7-7RRHz_2O8OpS979_pqNBz0R51Npd_leeWDx5uyUfaWVVkWy-WK1yw2ig21VFlylVc62Ki4y42STIaI02IipIsD_Vaj0Qyjg6XSuhq9EAyGW10x2Vxe8tsVccvea2QFt3-KsYbxCcYFzBjmv6TPkb6A9SHWRaxrWNfJfkN2F3sfdgr7aewd8neQf5D8U4iH0Hy0syRM5raZ_57MBplnybxOZoR1iNwZctdwdtAvkdRJncFYJN0k9x1OCudjZiLMvI-WR3uAWEC8hL5CcoPkZxhxzD7m15h_YE-TS5CrkztLbhvnENHDRHfRPIwPiF1F19CfQ5foV0iOSb2BGWBeJnOEhR9Y-IuFf7CmsXQsh-zv2KexT2J_jn2Z3C6OjnMnzirOj8Te4ravSJ_Avp-5EemLJG5w4AqpNsZrGF8wu8bcKaxXcI7hvIhzFTHFrb8wMyR6N1FJ9ATRG2gxtI-IPU_sTWLXicdI1EiuYL5D-mfmnyGzzcIlrArZv7Gz6I9hHsE8SSaC_SvaPPGbJG6iT6K_jf4expcY34YVn1L9zU5YbU_1g-rKYKVWPzwYj1T-pc560K569xXdfFt1Wu2g6pVKbl52h21ZbcpuKGnInvJldS0IN1uv1Yt11w0F_XDDQSdcW_UR-XJ3z5kfBUr5nX5L9ltdVfXcfE8Fcl0GclP5o1BadfdP1J5c_Q_rrKA1JgMAAA.webp?wid=766",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
   {
    category: "A4",
    models: [
      {
        name: "A4 Sedan",
        image:
          "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.webp?wid=608",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
   {
    category: "A5",
    models: [
      {
        name: "S5 Sportback",
        image:
          "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grD4_mtjdhon8WqzxTuloW9jCg5pKXLgMrUBejG5Bg3gMk-LYBCU5pBjAJMm8qiOgB8ZkcmBkYWCuAjEgGEODjKy3KKUgsSszVK89MKckQ1DAgEgizu7iGOHr6BAMAkhIhZOkAAAA.webp?wid=608",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
  {
    category: "A6",
    models: [
      {
        name: "A6 Sedan",
        image:
          "https://mediaservice.audi.com/media/fast/v3_xWTXWhbdRjG__66ri45SXpOTdqkxx7NOScrSLYkPf0YGl1GkQkWS2crOEf5pz1N0-XL5KSmVHAIw4HglToGwnahE-2ECU4cUxQmDCoW1AtFFOqdQnfj_NgcDE_hvXgvfs_DC-_zXLoputtNwfEjl2713957_7PbCNFpCNF1QXR77Waxfp8QYppAuSpL7sGVhlvqt-RY2u14abnaOJjL5Jx0YezpcrWeLsyOTnTSzslMWlYqEdHjC0WXED2nhOi-sGsjwn3tZqUhm7J6oOm2GvVaq7zqqsMTxaWcM1YsOoujC4sjEzK7VByXTraYcUYmJhbkmJMbc_0lp_kWm6LLdxcP1EoLC0vNes0bcRbd1kmv3uhUxF5H5qojJbFn9yyS_Tw4R-wYscvErhB_mPhjJPaTeJPEByQ-Qz-HkcbYwLiGsYXxHUl__sYUmJOYy5i3sO-RmiTlIg6jvEHoIuEPicSJthlYZ_AK-gr6C-hn0FsYj2K9grWFfRtxAPVLtD6iG8TGSSyh96EPox_FAutn7Cj2c9gfk0oT6CbwHsp-lMcJeYQd1CnUl9FqaB20G0T_JF4j_g3xv0jsYO7DvIMVxEpizWOdx9rEzhI8QvAflE_QniR2kdBVQp8Suov6BOoJVIl6HXUL7RG0UbRn0GbR2kRfJ34DfQb9OkO_MnSXoXsYezBUDJvkTcy3MT3Mz7HmsP7FVrHj2NPY72Nvo7xL6CyhP4i8Q-8svb-QWMc8xECLxDUUlchP9NWJniC6Quw1Yl_Rv8rACgOnsY9j17BfxD6HvelnD9GD6LBvm8BTBGYINAjcISgJrhG8ihJC2UC5TEgS8t_xA-EQ4YcInyJSIPIqkfP0DtN7mPhbJH5j8Hn0j9C_Z-gLjHGMOYw6yf8wk6g-M0N8DV3B_Bbzd5QulEHCJuEdIjuo3ahnUM8SWyf2NbEf_fiddmurZT92Vbfm5afqU4X5o_V2y029VF70lvPZQ7lMatktl5a9fNZxMilZaSzL_JKs-MiCrLpNmT_m-UWaL8zn5jMZH6j5xfLKfhPyk3KtsqtMtTzXbZZrJVkrVdx8NpOqup5clJ5cdZstH81n-roKc9P_A9Unwki7AwAA.webp?wid=766",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
   {
    category: "Q3",
    models: [
      {
        name: "Q3",
        image:
          "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz02lGkWJjJa2hZPffV-XVy17SWNbHwMrUBeTNpBgVgUSfMJAguMXA5gEmbcfRHiB-Ew2zAwMrBVARiQDCPDxlRblFCQWJebqlWemlGQIahgQCYTZXVxDHD19ggGAfbgW6QAAAA.webp?wid=608",
        discoverLink: "#",
        configureLink: "#",
      },
      {
        name: "Q3 Sportback",
        image:
          "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwXmmJ8mgQrXLOyup_BuWTc3xuOOLAMrUBeTNpBgVgUSfMJAguMXA5gEmbcfRHiB-Ew2zAwMrBVARiQDCPDxlRblFCQWJebqlWemlGQIahgQCYTZXVxDHD19ggFS-Jvs6QAAAA.webp?wid=608",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
   {
    category: "Q5",
    models: [
      {
        name: "Q5",
        image:
          "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/fygbuy/2023.webp?wid=608",
        discoverLink: "#",
        configureLink: "#",
      },
    ],
  },
 
];

export default function AudiModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic: show all or filtered by category
  const filteredData =
    selectedCategory === "All"
      ? carData
      : carData.filter((section) => section.category === selectedCategory);

  return (
    <>
      <div className="audi-models-page" data-aos="flip-right">
        {/* Sidebar for categories */}
        <aside className="sidebar">
          <h2>All models</h2>
          <div className="model-buttons-grid">
            <button
              className={
                selectedCategory === "All"
                  ? "model-grid-btn active"
                  : "model-grid-btn"
              }
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            {carData.map((section) => (
              <button
                key={section.category}
                className={
                  selectedCategory === section.category
                    ? "model-grid-btn active"
                    : "model-grid-btn"
                }
                onClick={() => setSelectedCategory(section.category)}
              >
                {section.category}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content: Models Display */}
        <main className="models-section" data-aos="slide-up">
          {filteredData.map((section) => (
            <div key={section.category} className="model-category">
              <h2>{section.category}</h2>
              <div className="model-cards">
                {section.models.map((model, idx) => (
                  <div key={idx} className="model-card">
                    <div className="model-img"><img src={model.image} alt={model.name} /></div>
                    <h3>{model.name}</h3>
                    <div className="model-buttons">
                      <a href={model.discoverLink} className="discover-btn">
                        Discover
                      </a>
                      <a href={model.configureLink} className="configure-btn">
                        Configure
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
