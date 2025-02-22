document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const slider = document.querySelector(".slider");
  const slides = Array.from(slider.children);
  const expandedView = document.querySelector(".expanded-view");
  const contentContainer = document.querySelector(".content-container");
  const closeButton = document.querySelector(".close-btn");
  const langToggleButton = document.getElementById("langToggle"); // Single language toggle button
  const musicPlayer = document.querySelector("audio");
  const copyrightNotice = document.querySelector("footer span");

  // Default language is English
  let currentLanguage = "en";

  // Detailed content for each slide in English (for Expanded View)
  const englishContent = {
    "1930s": {
      title: "The 1930s: The Birth of a Nation and Unification",
      images: [
        "img/1930s/image-1930s-1.jpg",
        "img/1930s/image-1930s-3.jpg",
        "img/1930s/image-1930s-4.jpg",
        "img/1930s/image-1930s-5.jpg",
        "img/1930s/image-1930s-2.jpg",
      ],
      description:
        "The 1930s marked the dawn of a new era for the Arabian Peninsula with the establishment of the Kingdom of Saudi Arabia. King Abdulaziz Al Saud, known as Ibn Saud, was the visionary leader who successfully unified various disparate tribes and regions that had been previously fragmented under the influence of different ruling powers. Through perseverance, strategic alliances, and military prowess, King Abdulaziz led his forces in a series of campaigns, ultimately uniting the Kingdom in 1932. This unification was a monumental moment in history, creating a stable foundation for the development of a new nation. The discovery of oil in 1938 transformed the country’s destiny, propelling Saudi Arabia into becoming one of the world's leading economies. The legacy of King Abdulaziz’s leadership continues to shape the Kingdom today.",
    },

    "1940s": {
      title: "The 1940s: Consolidation and Global Engagement",
      images: ["img/1940s/image-1940s-1.jpg", "img/1940s/image-1940s-2.jpg"],
      description:
        "The 1940s was a decade of consolidation and positioning for Saudi Arabia. After the unification of the Kingdom, King Abdulaziz focused on strengthening its internal institutions, ensuring national security, and modernizing the country. The King also began to establish strategic international relationships that would become pivotal for Saudi Arabia’s future. One of the most significant milestones of this period was the Kingdom’s initial engagement with the global oil market. By the late 1940s, Saudi Arabia began to sign lucrative oil agreements with Western companies, securing a future of prosperity. Moreover, King Abdulaziz's leadership on the global stage began to take shape as he built strong diplomatic ties with the United States and other Western nations, positioning Saudi Arabia as an important ally in the Middle East. The 1940s marked the foundation of Saudi Arabia’s growing importance in world politics and economics.",
    },

    "1950s": {
      title: "The 1950s: Modernization and Regional Leadership",
      images: [
        "img/1950s/image-1950s-1.jpg",
        "img/1950s/image-1950s-2.jpg",
        "img/1950s/image-1950s-3.jpg",
      ],
      description:
        "The 1950s were a time of significant change and growth for Saudi Arabia. Following the death of King Abdulaziz in 1953, the Kingdom entered a new chapter with the ascension of his son, King Saud bin Abdulaziz Al Saud. King Saud’s reign was marked by ambitious projects aimed at modernizing the Kingdom’s infrastructure. Under his leadership, the government focused on the development of roads, schools, hospitals, and the expansion of the Kingdom’s oil industry. The 1950s also saw the establishment of the first formal education system, an important step toward building the Kingdom’s human capital. Saudi Arabia’s foreign policy became more assertive, leading to its leadership role in regional and international diplomacy, and the founding of OPEC in 1960.",
    },

    "1960s": {
      title: "The 1960s: Growth and International Diplomacy",
      images: [
        "img/1960s/image-1960s-1.jpg",
        "img/1960s/image-1960s-2.jpg",
        "img/1960s/image-1960s-3.jpg",
      ],
      description:
        "The 1960s were a period of further expansion and transformation for Saudi Arabia. King Saud’s reign ended in 1964, and he was succeeded by King Faisal bin Abdulaziz Al Saud, whose leadership proved to be instrumental in guiding the Kingdom into a new era of political modernization and global diplomacy. Domestically, Saudi Arabia made significant strides in education, healthcare, and infrastructure. King Faisal’s economic policies helped harness the country’s oil wealth, improving the standard of living for many Saudis. Internationally, King Faisal was a key figure in advocating for Arab unity and played a central role in OPEC. His leadership brought greater international attention to Saudi Arabia and solidified its position as a powerful regional and global force.",
    },

    "1970s": {
      title: "The 1970s: Oil Crisis and Economic Transformation",
      images: [
        "img/1970s/image-1970s-1.jpg",
        "img/1970s/image-1970s-3.jpg",
        "img/1970s/image-1970s-2.jpg",
      ],
      description:
        "The 1970s were a transformative decade for Saudi Arabia. The oil crisis of 1973 marked a turning point, with Saudi Arabia leading the oil embargo during the Yom Kippur War, which dramatically increased oil prices. This positioned Saudi Arabia as a critical player in global energy politics. Under King Khalid, who ascended to the throne in 1975, the Kingdom continued to expand its infrastructure, investing in healthcare, education, and industry. Saudi Arabia also increased its regional diplomatic influence, solidifying its leadership within the Arab world and positioning itself as a key player on the global stage.",
    },

    "1980s": {
      title: "The 1980s: Economic Growth and Regional Cooperation",
      images: ["img/1980s/image-1980s-1.jpg"],
      description:
        "The 1980s saw continued economic growth fueled by rising oil prices. Saudi Arabia’s significant revenues were channeled into large-scale infrastructure, education, and healthcare projects. The Kingdom’s leadership in the Gulf Cooperation Council (GCC), established in 1981, solidified its role in promoting regional cooperation and stability. Saudi Arabia’s leadership in the GCC played a crucial role in strengthening ties with its neighbors and fostering political, economic, and security collaboration. This period also saw Saudi Arabia solidify its status as a major economic and diplomatic force in the region.",
    },

    "1990s": {
      title: "The 1990s: Gulf War and Political Modernization",
      images: ["img/1990s/image-1990s-1.jpg"],
      description:
        "The 1990s were a defining period for Saudi Arabia, particularly due to the Gulf War. When Iraq invaded Kuwait in 1990, Saudi Arabia acted quickly to protect its sovereignty and regional stability. The Kingdom played a crucial role in the liberation of Kuwait and strengthened its position as a key ally of the West. King Fahd implemented significant economic and political reforms, including the establishment of the Basic Law of Governance in 1992, which set the foundation for future political modernization. The 1990s were also marked by efforts to modernize the Kingdom’s infrastructure and ensure long-term stability in the region.",
    },

    "2000s": {
      title: "The 2000s: Visionary Leadership and Economic Diversification",
      images: ["img/2000s/image-2000s-1.jpg"],
      description:
        "The 2000s were a decade of visionary leadership under King Abdullah, who prioritized economic diversification and modernization. King Abdullah introduced bold initiatives, such as the creation of new economic cities and the Saudi Vision 2020 plan, which aimed to reduce the Kingdom's dependence on oil revenues. This period saw significant advancements in education, healthcare, and technology. King Abdullah also introduced reforms aimed at improving women's rights and expanding Saudi Arabia’s influence in the global arena, positioning the Kingdom as a regional leader in innovation.",
    },

    "2010s": {
      title: "The 2010s: Reforms and Global Ambitions",
      images: ["img/2010s/image-2010s-1.jpg", "img/2010s/image-2010s-2.jpg"],
      description:
        "The 2010s were marked by groundbreaking reforms under King Salman and Crown Prince Mohammed bin Salman. One of the most significant changes was the lifting of the ban on women driving in 2018, a milestone in the Kingdom’s efforts to improve gender equality. Saudi Arabia also launched its Vision 2030 plan, a roadmap for economic diversification and technological innovation. The Kingdom’s global diplomatic and economic influence grew during this period, with Saudi Arabia playing a prominent role in international affairs. Vision 2030 paved the way for a future focused on sustainability, tourism, and cultural renaissance.",
    },

    "2020s": {
      title: "The 2020s: Innovation and Global Leadership",
      images: [
        "img/2020s/image-2020s-1.jpg",
        "img/2020s/image-2020s-2.jpg",
        "img/2020s/image-2020s-3.jpg",
      ],
      description:
        "The 2020s saw Saudi Arabia continue its trajectory of progress and growth. The Kingdom hosted the G20 summit in 2020, showcasing its leadership on the global stage. The Saudi Green Initiative, launched in 2021, reflected the Kingdom’s commitment to environmental sustainability. Major projects like NEOM and the Kingdom's focus on space exploration reinforced Saudi Arabia's position as a hub for innovation and technology. The Vision 2030 plan continues to guide the country’s development, with ambitious goals for the future in tourism, culture, and sustainability.",
    },

    2024: {
      title: "2024: The Kingdom’s Bright Future Ahead",
      images: ["img/image-2024.jpg"],
      description:
        "As Saudi Arabia looks to the future, it continues to make strides in economic diversification, technological advancement, and sustainability. The Vision 2030 plan remains the cornerstone of the Kingdom’s long-term goals, with a focus on creating a thriving economy, investing in innovation, and fostering a global cultural and business hub. Under the leadership of King Salman and Crown Prince Mohammed bin Salman, Saudi Arabia is setting new benchmarks in governance, development, and global partnerships. The future of the Kingdom is bright as it builds on its rich history of unity, progress, and visionary leadership.",
    },
  };

  const arabicContent = {
    "1930s": {
      title: "الثلاثينيات: مولد الأمة والتوحيد",
      description:
        "شهدت الثلاثينيات فجر حقبة جديدة لشبه الجزيرة العربية مع تأسيس المملكة العربية السعودية. كان الملك عبد العزيز آل سعود، المعروف بابن سعود، هو القائد الرؤيوي الذي نجح في توحيد القبائل والمناطق المتفرقة التي كانت قد تفرقت تحت تأثير القوى الحاكمة المختلفة. من خلال الإصرار والتحالفات الاستراتيجية والقدرة العسكرية، قاد الملك عبد العزيز قواته في سلسلة من الحملات، وفي النهاية توحدت المملكة في عام 1932. وكان هذا التوحيد لحظة هامة في التاريخ، حيث أسس قاعدة ثابتة لتطوير أمة جديدة. اكتشاف النفط في عام 1938 غيّر مصير البلاد، مما دفع المملكة لاحقًا لتصبح واحدة من أكبر اقتصادات العالم. ولا يزال إرث القيادة السياسية والاستراتيجية للملك عبد العزيز يشكل المملكة اليوم.",
      images: [
        "img/1930s/image-1930s-1.jpg",
        "img/1930s/image-1930s-3.jpg",
        "img/1930s/image-1930s-4.jpg",
        "img/1930s/image-1930s-5.jpg",
        "img/1930s/image-1930s-2.jpg",
      ],
    },

    "1940s": {
      title: "الأربعينيات: التوطيد والتخطيط",
      description:
        "كانت الأربعينيات عقدًا من التوطيد والتخطيط للمملكة العربية السعودية. بعد توحيد المملكة، ركز الملك عبد العزيز على تقوية مؤسساتها الداخلية، وضمان الأمن الوطني، وتحديث البلاد. كما بدأ في إقامة علاقات دولية استراتيجية أصبحت حيوية لمستقبل المملكة. كان أحد أبرز محطات هذه الفترة هو انخراط المملكة الأول في سوق النفط العالمية. بحلول أواخر الأربعينيات، بدأت السعودية في توقيع اتفاقيات نفطية مربحة مع الشركات الغربية، مما ضمَن مستقبلًا مزدهرًا. علاوة على ذلك، بدأ الملك عبد العزيز في بناء علاقات دبلوماسية قوية مع الولايات المتحدة ودول غربية أخرى، مما جعل المملكة حليفًا مهمًا في الشرق الأوسط.",
      images: ["img/1940s/image-1940s-1.jpg", "img/1940s/image-1940s-2.jpg"],
    },

    "1950s": {
      title: "الخمسينيات: فترة التغيير والنمو",
      description:
        "كانت الخمسينيات فترة تغيير ونمو كبير للمملكة العربية السعودية. بعد وفاة الملك عبد العزيز في عام 1953، دخلت المملكة مرحلة جديدة مع صعود ابنه، الملك سعود بن عبد العزيز آل سعود. كانت فترة حكم الملك سعود مليئة بالمشروعات الطموحة التي تهدف إلى تحديث بنية المملكة التحتية. تحت قيادته، ركزت الحكومة على تطوير الطرق والمدارس والمستشفيات وتوسيع صناعة النفط في المملكة. كما شهدت هذه الفترة تأسيس أول نظام تعليمي رسمي، وه و خطوة هامة نحو بناء رأس المال البشري للمملكة.",
      images: [
        "img/1950s/image-1950s-1.jpg",
        "img/1950s/image-1950s-2.jpg",
        "img/1950s/image-1950s-3.jpg",
      ],
    },

    "1960s": {
      title: "الستينيات: التوسع والتحول",
      description:
        "كانت الستينيات فترة توسع وتحول إضافي للمملكة. انتهت فترة حكم الملك سعود في عام 1964، وجاء خلفه الملك فيصل بن عبد العزيز آل سعود، الذي كانت قيادته محورية في توجيه المملكة نحو عصر جديد من التحديث السياسي والدبلوماسية العالمية. تحت قيادة الملك فيصل، حققت السعودية تقدمًا كبيرًا في الشؤون الداخلية والخارجية. داخليًا، استمرت المملكة في جهودها للتحديث، مع التركيز بشكل خاص على التعليم والرعاية الصحية.",
      images: [
        "img/1960s/image-1960s-1.jpg",
        "img/1960s/image-1960s-2.jpg",
        "img/1960s/image-1960s-3.jpg",
      ],
    },

    "1970s": {
      title: "السبعينيات: أزمة النفط والنمو الاقتصادي",
      description:
        "كانت السبعينيات عقدًا محوريًا للمملكة العربية السعودية. مع أزمة النفط عام 1973، أصبحت السعودية لاعبًا أساسيًا في السياسة العالمية للطاقة. فقرار المملكة بقيادة حظر النفط خلال حرب يوم كيبور أدى إلى زيادة كبيرة في أسعار النفط، مما وفر للمملكة ثروة ضخمة وأكد مكانتها الاستراتيجية على الساحة العالمية. عززت هذه الفترة مكانة المملكة كأحد أكبر منتجي النفط في العالم وقوة اقتصادية عالمية.",
      images: [
        "img/1970s/image-1970s-1.jpg",
        "img/1970s/image-1970s-3.jpg",
        "img/1970s/image-1970s-2.jpg",
      ],
    },

    "1980s": {
      title: "الثمانينيات: نمو اقتصادي وتعاون إقليمي",
      description:
        "كانت الثمانينيات فترة نمو اقتصادي مستمر، وتعاون إقليمي، وتوسيع نفوذ المملكة العالمي. أدى ارتفاع أسعار النفط بعد الثورة الإيرانية في 1979 إلى توفير إيرادات كبيرة للمملكة، مما مكنها من مواصلة مشروعاتها الطموحة. سمحت ثروة النفط للمملكة بالاستثمار في البنية التحتية والتعليم والرعاية الصحية، مما حسّن نوعية الحياة لملايين السعوديين.",
      images: ["img/1980s/image-1980s-1.jpg"],
    },

    "1990s": {
      title: "التسعينيات: حرب الخليج والتغييرات الاجتماعية",
      description:
        "كانت التسعينيات فترة حاسمة للمملكة العربية السعودية، لا سيما بسبب حرب الخليج في 1990-1991. عندما غزت العراق، بقيادة صدام حسين، الكويت، تحركت المملكة بسرعة لحماية سيادتها واستقرار المنطقة. لعبت المملكة دورًا رئيسيًا في القوات المشتركة التي حررت الكويت، مما عزز سمعتها كقائد في الأمن الإقليمي وحليف رئيسي في جهود الغرب للحفاظ على السلام في الشرق الأوسط.",
      images: ["img/1990s/image-1990s-1.jpg"],
    },

    "2000s": {
      title: "الألفينات: الإصلاحات الاقتصادية والاجتماعية",
      description:
        "كانت الألفينات فترة قيادة رؤيوية وتقدم تحت قيادة الملك عبد الله بن عبد العزيز آل سعود، الذي تولى العرش في عام 2005. أولى الملك عبد الله أهمية كبيرة لتنويع الاقتصاد وتحديثه، مما ضمن أن المملكة لن تكون معتمدة فقط على إيرادات النفط من أجل ازدهارها المستقبلي. شهدت فترة حكمه تطوير مدن اقتصادية جديدة، مثل مدينة الملك عبد الله الاقتصادية، وإطلاق المبادرات الطموحة مثل رؤية السعودية 2020.",
      images: ["img/2000s/image-2000s-1.jpg"],
    },

    "2010s": {
      title: "العشرونات: الإصلاحات الاجتماعية والدبلوماسية",
      description:
        "كانت العشرونات مليئة بالإصلاحات المبتكرة التي غيرت النسيج الاجتماعي للمملكة ووسعت دورها في الشؤون العالمية. تحت قيادة الملك سلمان بن عبد العزيز آل سعود، الذي تولى العرش في 2015، شهدت المملكة فترة من التغييرات الاجتماعية والثقافية الهامة. كان الإصلاح الأكثر بروزًا هو رفع الحظر عن قيادة المرأة في 2018، وهو خطوة تاريخية للأمام من أجل المساواة بين الجنسين في المملكة.",
      images: ["img/2010s/image-2010s-1.jpg", "img/2010s/image-2010s-2.jpg"],
    },

    "2020s": {
      title: "العشرونات: الاستدامة والتكنولوجيا",
      description:
        "مع دخول المملكة العقد الثالث من الألفية، استمرت المملكة في مسارها الرائع نحو التقدم والنمو. بدأت العقد باستضافة المملكة لقمة مجموعة العشرين في 2020، مما أظهر قدرة السعودية على القيادة على الساحة العالمية وتقوية الشراكات الدولية. تعتبر المبادرة الخضراء السعودية، التي أُطلقت في 2021، شهادة على التزام المملكة بالاستدامة البيئية والعمل المناخي.",
      images: [
        "img/2020s/image-2020s-1.jpg",
        "img/2020s/image-2020s-2.jpg",
        "img/2020s/image-2020s-3.jpg",
      ],
    },

    2024: {
      title: "وقتنا الحاضر: رؤية جديدة للمستقبل",
      description:
        "بينما تنظر المملكة إلى المستقبل، تظل المملكة العربية السعودية مستعدة لتحقيق إنجازات أكبر. تستمر رؤية المملكة 2030 في تشكيل مستقبلها، مع أهداف طموحة تركز على التنويع الاقتصادي والاستدامة والابتكار. تتحول المملكة بسرعة إلى مركز عالمي للتكنولوجيا والثقافة والأعمال، جاذبة الاستثمارات والشراكات والموهوبين من جميع أنحاء العالم.",
      images: ["img/image-2024.jpg"],
    },
  };

  // Function to update carousel rotation dynamically
  const updateCarousel = () => {
    const totalSlides = slides.length;
    const rotationAngle = 360 / totalSlides; // Equal rotation for all slides
    const depth = 350; // Depth for spacing

    slides.forEach((slide, index) => {
      slide.style.transform = `rotateY(${
        index * rotationAngle
      }deg) translateZ(${depth}px)`;
    });
  };

  // Open expanded view
  const openExpandedView = (year) => {
    const content = currentLanguage === "en" ? englishContent : arabicContent;

    const activeSlide = slides.find(
      (slide) => slide.getAttribute("data-year") === year
    );
    if (!activeSlide) return;

    const { title, description, images } = content[year] || {};

    // Build HTML for the expanded view
    let detailedHtml = `
      <h2>${title}</h2>
      <p>${description}</p>
      <div class="image-gallery">
        ${images
          .map((image) => `<img src="${image}" alt="Image for ${year}">`)
          .join("")}
      </div>
    `;

    contentContainer.innerHTML = detailedHtml;

    expandedView.classList.add("active"); // Show the expanded view
    document.body.style.overflow = "hidden"; // Prevent body scrolling
  };

  // Close expanded view
  const closeExpandedView = () => {
    expandedView.classList.remove("active"); // Hide the expanded view
    document.body.style.overflow = ""; // Restore body scrolling
  };

  // Attach click event listeners to slides
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      const year = slide.getAttribute("data-year");
      openExpandedView(year);
    });
  });

  // Close expanded view when the close button is clicked
  closeButton.addEventListener("click", closeExpandedView);

  // Language toggle functionality
  langToggleButton.addEventListener("click", () => {
    // Toggle the language
    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    // Update the button text
    langToggleButton.textContent = currentLanguage === "en" ? "AR" : "EN";

    // Toggle RTL/LTR direction on the body
    document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    // Toggle font classes on the body
    document.body.classList.toggle("arabic-font", currentLanguage === "ar");
    document.body.classList.toggle("english-font", currentLanguage === "en");

    // Update slide titles and descriptions
    slides.forEach((slide) => {
      const title = slide.querySelector(".title");
      const description = slide.querySelector(".description");

      title.textContent = title.dataset[currentLanguage];
      description.innerHTML = description.dataset[currentLanguage];
    });

    // Update copyright notice
    copyrightNotice.textContent = copyrightNotice.dataset[currentLanguage];

    // Close the expanded view to reflect language changes
    closeExpandedView();
  });

  // Background music
  musicPlayer.volume = 0.2; // Set initial volume
  musicPlayer.play(); // Start playing music automatically
  musicPlayer.muted = false; // Unmute music after DOM loads

  // Handle window resize
  window.addEventListener("resize", () => {
    updateCarousel(); // Update slide positions on resize
  });

  // Initial carousel setup
  updateCarousel();

  // Initially set the English font and LTR direction
  document.body.classList.add("english-font");
  document.body.dir = "ltr";
});
