export interface Product {
  id: number;
  src: string;
  name: string;
  rating: string; 
  price: string;
  categories: string;
  active: boolean;
  link: string;
  likes: number;
  remove: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    src: "../assets/img/product-1.jpg",
    name: 'Deenyc flamingo мультиколор 50',
    rating: "5.0",
    price: "7 899",
    categories: "Трусы",
    active: false,
    link: "https://kaspi.kz/shop/p/deenyc-classic-chernyi-52-106368142/?c=750000000",
    likes: 92523,
    remove: false,
    description: 'Представляем вам элегантные и функциональные плавки, которые станут незаменимым аксессуаром для вашего пляжного отдыха или тренировок в бассейне. Изготовленные из высококачественного материала, они обеспечивают непревзойденный комфорт и надежную поддержку во время плавания.'
  },
  {
    id: 2,
    src: "../assets/img/product-2.jpg",
    name: 'Декорация для праздника Ведро декоративное',
    rating: "5.0",
    price: "1 500",
    categories: "Декоративные",
    active: false,
    link: "https://kaspi.kz/shop/p/dekoratsija-dlja-prazdnika-vedro-dekorativnoe-metallicheskoe-home-and-flowers-1-sht-114335565/?c=750000000",
    likes: 3,
    remove: false,
    description: 'Представляем вам элегантные и функциональные плавки, которые станут незаменимым аксессуаром для вашего пляжного отдыха или тренировок в бассейне. Изготовленные из высококачественного материала, они обеспечивают непревзойденный комфорт и надежную поддержку во время плавания.'
  },
  {
    id: 3,
    src: "../assets/img/product-3.jpg",
    name: 'Заготовка для декорирования',
    rating: "5.0",
    price: "2 618",
    categories: "Декоративные",
    active: false,
    link: "https://kaspi.kz/shop/p/zagotovka-dlja-dekorirovanija-34-love2art-34-pam-061-34-kopilka-svin-ja-34-pap-e-mashe-16-h-10-8-h-14-sm--112022160/?c=750000000",
    likes: 64,
    remove: false,
    description: 'Эта красочная заготовка в форме свиньи станет идеальным художественным холстом для вашего творчества. Изготовленная из качественного дерева и тщательно отшлифованная, она готова к вашим самым смелым идеям декора.'
  },
  {
    id: 4,
    src: "../assets/img/product-4.jpg",
    rating: "5.0",
    name: 'Маска',
    price: "614",
    categories: "Маски",
    active: false,
    link: "https://kaspi.kz/shop/p/maska-108716791/?c=750000000",
    likes: 357,
    remove: false,
    description: 'Эта маска, вдохновленная легендарным образом из фильма "V значит Вендетта", стала не просто предметом киноистории, но и символом свободы, анонимности и протеста. С ее помощью вы сможете выразить свою поддержку идеалам анонимной активистской группировки или просто добавить загадочности вашему облику на тематических мероприятиях и костюмированных вечеринках.'
  },
  {
    id: 5,
    src: "../assets/img/product-5.jpg",
    rating: "5.0",
    name: 'Маска Шрек',
    price: "6 998",
    categories: "Маски",
    active: false,
    link: "https://kaspi.kz/shop/p/maska-shrek-114911247/?c=750000000",
    likes: 879,
    remove: false,
    description: 'Приветствуйте героя известного анимационного фильма с нашей оригинальной маской "Шрека"! С этой маской вы сможете превратиться в забавного и добродушного зеленого огра, который стал любимым персонажем миллионов по всему миру.'
  },
  {
    id: 6,
    src: "../assets/img/product-6.jfif",
    name: 'Комплект дисков K&K Скайрим',
    rating: "5.0",
    price: "145 400",
    categories: "Декоративные",
    active: false,
    link: "https://kaspi.kz/shop/p/k-k-skairim-6-5x16-5x114-3-d66-1-et48-grafit-115794161/?c=750000000",
    likes: 234,
    remove: false,
    description: 'Приведите в жизнь ваше воображение и отправьтесь в захватывающее путешествие по миру Скайрима с помощью этого уникального комплекта дисков от K&K. Специально созданный для поклонников фэнтезийных ролевых игр, этот комплект содержит все необходимое для полного погружения в мир магии, приключений и опасностей.'
  },
  {
    id: 7,
    src: "../assets/img/product-7.jpg",
    name: 'Кукла-модель Маша и Медведь',
    rating: "5.0",
    price: "2 293",
    categories: "Декоративные",
    active: false,
    link: "https://kaspi.kz/shop/p/kukla-model-masha-i-medved-000422-15-sm-102855747/?c=750000000",
    likes: 934,
    remove: false,
    description: 'Представляем вам элегантные и функциональные плавки, которые станут незаменимым аксессуаром для вашего пляжного отдыха или тренировок в бассейне. Изготовленные из высококачественного материала, они обеспечивают непревзойденный комфорт и надежную поддержку во время плавания.'
  },
  {
    id: 8,
    src: "../assets/img/product-8.jpg",
    name: 'Седло Киргизское',
    rating: "5.0",
    price: "45 000",
    categories: "Декоративные",
    active: false,
    link: "https://kaspi.kz/shop/p/kirgizskoe-yr-yz-er-115137674/?c=750000000",
    likes: 342,
    remove: false,
    description: 'Представляем вам аутентичное киргизское седло, которое сочетает в себе уникальное традиционное ремесло и высокую функциональность для комфортной и безопасной верховой езды. Изготовленное опытными мастерами из качественных материалов, оно станет надежным компаньоном в ваших лошадиных поездках.'
  },
  {
    id: 9,
    src: "../assets/img/product-9.jpg",
    name: 'Трусики Yokosun XL',
    rating: "5.0",
    price: "6 499",
    categories: "Трусы",
    active: false,
    link: "https://kaspi.kz/shop/p/trusiki-yokosun-xl-38-sht-16200264/?c=750000000",
    likes: 20,
    remove: false,
    description: 'Представляем вам стильные и удобные трусики Yokosun XL, которые станут незаменимым элементом вашего гардероба. Изготовленные из высококачественных материалов с учетом самых современных технологий, они обеспечат вам комфорт и уверенность на протяжении всего дня.'
  },
  {
    id: 10,
    src: "../assets/img/product-10.jpg",
    name: 'Семена Аэлита Кабачок Негритенок',
    rating: "1.0",
    price: "230",
    categories: "Еда",
    active: false,
    link: "https://kaspi.kz/shop/p/aelita-kabachok-negritenok-102986427/?c=750000000",
    likes: 568,
    remove: false,
    description: 'Представляем вам высококачественные семена кабачка "Негритенок" от знаменитого производителя "Аэлита". Этот сорт отличается устойчивостью к болезням, высокой урожайностью и прекрасным вкусом плодов, что делает его отличным выбором для вашего сада или огорода.'
  },
  {
    id: 11,
    src: "../assets/img/product-11.jpg",
    name: 'Tuba swimmingtrunks-green-M зеленый XL',
    rating: "4.2",
    price: "7 900",
    categories: "Трусы",
    active: false,
    link: "https://kaspi.kz/shop/p/tuba-swimmingtrunks-green-m-zelenyi-xl-110479506/?c=750000000",
    likes: 518,
    remove: false,
    description: 'Для создания привлекательного описания зелёных мужских плавок, давайте учтём несколько ключевых моментов: стиль, материал, особенности дизайна и функциональность. Ниже приведён пример такого описания.'
  },
  {
    id: 12,
    src: "../assets/img/product-12.jpg",
    name: 'Deenyc laguna черный 50',
    rating: "3.3",
    price: "7 500",
    categories: "Трусы",
    active: false,
    link: "https://kaspi.kz/shop/p/deenyc-laguna-chernyi-50-108793097/?c=750000000",
    likes: 2348,
    remove: false,
    description: 'Окунитесь в мир комфорта и стиля с нашими черными мужскими плавками. Идеальный выбор для тех, кто ценит минимализм и элегантность, эти плавки подчеркивают безупречный вкус и предоставляют исключительное удобство во время водных развлечений.'
  },
  {
    id: 13,
    src: "../assets/img/product-13.jpg",
    name: 'Deenyc flamingo мультиколор 50',
    rating: "4.7",
    price: "7 900",
    categories: "Трусы",
    active: false,
    link: "https://kaspi.kz/shop/p/deenyc-flamingo-mul-tikolor-50-106367986/?c=750000000",
    likes: 635,
    remove: false,
    description: 'Освежите свой пляжный гардероб с нашими синими мужскими плавками. Этот насыщенный оттенок синего не только выглядит стильно, но и отражает ощущение прохлады и свободы у воды. '
  },
  {
    id: 14,
    src: "../assets/img/product-14.jpg",
    rating: "1.7",
    name: 'Маска Sunny Days',
    price: "979",
    categories: "Маски",
    active: false,
    link: "https://kaspi.kz/shop/p/maska-sunny-days-107462777/?c=750000000",
    likes: 3948,
    remove: false,
    description: 'Приветствуйте героя известного анимационного фильма с нашей оригинальной маской "Бэтмена"! С этой маской вы сможете превратиться в забавного и добродушного зеленого огра, который стал любимым персонажем миллионов по всему миру.'
  },
  {
    id: 15,
    src: "../assets/img/product-15.jpg",
    rating: "4.9",
    name: 'Маска Инопланетянен',
    price: "4 990 ",
    categories: "Маски",
    active: false,
    link: "https://kaspi.kz/shop/p/maska-inoplanetjanen-116650716/?c=750000000",
    likes: 48,
    remove: false,
    description: 'Приветствуйте героя известного анимационного фильма с нашей оригинальной маской "инопланетянена"! С этой маской вы сможете превратиться в забавного и добродушного зеленого огра, который стал любимым персонажем миллионов по всему миру.'
  },
  {
    id: 16,
    src: "../assets/img/product-16.jpg",
    rating: "3.5",
    name: 'Маска Голова Рыбы с сигарой',
    price: "3 990",
    categories: "Маски",
    active: false,
    link: "https://kaspi.kz/shop/p/maska-golova-ryby-s-sigaroi-116486665/?c=750000000",
    likes: 346,
    remove: false,
    description: 'Приветствуйте героя известного анимационного фильма с нашей оригинальной маской "рыба с сигарой"! С этой маской вы сможете превратиться в забавного и добродушного зеленого огра, который стал любимым персонажем миллионов по всему миру.'
  },
];
