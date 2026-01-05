// const recipesDishBD = [
//   {
//     id: 1,
//     title: "Омлет с тунцом",
//     imageUrl: "/image/recipe-1.png",
//     nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
//     calorieContent: 212,
//     private: false,
//   },
//   {
//     id: 2,
//     title: "Ленивые вареники",
//     imageUrl: "/image/recipe-2.png",
//     nutrients: { protein: 17, fat: 4, carbohydrates: 15 },
//     calorieContent: 180,
//     private: false,
//   },
//   {
//     id: 3,
//     title: "Овсяноблин с бананом и сыром",
//     imageUrl: "/image/recipe-3.png",
//     nutrients: { protein: 10, fat: 4, carbohydrates: 25 },
//     calorieContent: 150,
//     private: false,
//   },
//   {
//     id: 4,
//     title: "Тост с глазуньей и рукколой",
//     imageUrl: "/image/recipe-4.png",
//     nutrients: { protein: 14, fat: 11, carbohydrates: 13 },
//     calorieContent: 202,
//     private: false,
//   },
//   {
//     id: 5,
//     title: "Пшеничная каша с яблоком и корицей",
//     imageUrl: "/image/recipe-5.png",
//     nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
//     calorieContent: 212,
//     private: true,
//   },
//   {
//     id: 6,
//     title: "Сырники с тыквой",
//     imageUrl: "/image/recipe-6.png",
//     nutrients: { protein: 17, fat: 5, carbohydrates: 19 },
//     calorieContent: 196,
//     private: false,
//   },
//   {
//     id: 7,
//     title: "Творожная запеканка с ягодами",
//     imageUrl: "/image/recipe-7.png",
//     nutrients: { protein: 27, fat: 7, carbohydrates: 13 },
//     calorieContent: 187,
//     private: false,
//   },
//   {
//     id: 8,
//     title: "Куриные маффины с сыром",
//     imageUrl: "/image/recipe-8.png",
//     nutrients: { protein: 23, fat: 7, carbohydrates: 8 },
//     calorieContent: 178,
//     private: false,
//     ingestion: ["breakfast", "lunch"], //smoothie,dinner
//     cookingTime: "middling", //fast,long
//     yourTarget: "weightSupport", //muscleGain,detox,weightLoss
//     complexity: "middle", //easy,difficult
//     description:
//       "Эти аппетитные куриные маффины с сыром - идеальное решение для тех, кто ищет питательный, но при этом легкий и удобный вариант для завтрака, обеда или перекуса. ",
//     ingredients: [
//       "куриное филе - 300г.",
//       "Яйца куриные - 3шт.",
//       "Твердый сыр (например, чеддер, гауда, моцарелла) - 100г.",
//       "Молоко (или нежирные сливки) - 50мл.",
//       "Мука цельнозерновая (или рисовая, овсяная) - 2 ст.л. (по желанию, для более плотной текстуры).",
//       "Соль - по вкусу.",
//       "Черный перец молотый - по вкусу.",
//       "Сушеный чеснок, паприка, итальянские травы - по 1/2 ч.л. (по желанию).",
//       "Растительное масло - для смазывания формы.",
//     ],
//     recipe: [
//       {
//         stageName: "Подготовка ингредиентов",
//         stageList: [
//           "Куриное филе промойте, обсушите бумажным полотенцем. Нарежьте очень мелкими кубиками (примерно 0.5-0.7 см).",
//           "Сыр натрите на крупной терке.",
//           "Если используете лук, болгарский перец, чеснок: мелко нарежьте их. Шампиньоны нарежьте и слегка обжарьте до испарения влаги.",
//           "Зелень мелко порубите.",
//         ],
//       },
//       {
//         stageName: "Смешивание основы",
//         stageList: [
//           "В глубокой миске слегка взбейте яйца с молоком.",
//           "Добавьте нарезанное куриное филе, натертый сыр, все выбранные дополнительные ингредиенты (лук, перец, зелень, чеснок, грибы и т.д.).",
//           "Если используете муку и разрыхлитель, просейте их вместе и добавьте к остальным ингредиентам. Хорошо перемешайте, чтобы не было комочков.",
//           "Приправьте солью, черным перцем и любыми другими специями по вкусу. Тщательно перемешайте до однородности.",
//         ],
//       },
//     ],
//     advice: {
//       temperature: "Разогрейте духовку до 180°C.",
//       time: "выпекайте 25-35 минут",
//       otherAdvice: [
//         "Форму для маффинов смажьте растительным маслом или вложите в каждую ячейку бумажные вкладыши.",
//         "пока маффины не станут золотистыми и не пропекутся внутри (проверить можно деревянной шпажкой – она должна выходить сухой).",
//       ],
//     },
//   },
//   {
//     id: 9,
//     title: "Панкейки с бананом",
//     imageUrl: "/image/recipe-9.png",
//     nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
//     calorieContent: 212,
//     private: false,
//   },
// ]

// export default recipesDishBD

const recipesDishBD = [
  {
    id: 1,
    title: "Омлет с овощами и шпинатом",
    imageUrl: "/image/recipe/recipe-1.jpg",
    nutrients: { protein: 20, fat: 9, carbohydrates: 7 },
    calorieContent: 205,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightLoss",
    complexity: "easy",
    description:
      "Лёгкий омлет с овощами и шпинатом — идеальный завтрак для поддержания формы и энергии.",
    ingredients: [
      "Яйца куриные - 2шт.",
      "Шпинат свежий - 50г.",
      "Болгарский перец - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Овощи промойте и нарежьте мелкими кубиками.",
          "Шпинат крупно порубите.",
        ],
      },
      {
        stageName: "Приготовление",
        stageList: [
          "Взбейте яйца с солью и перцем.",
          "Разогрейте сковороду с маслом.",
          "Добавьте овощи и обжарьте 2-3 минуты.",
          "Залейте яйцами и готовьте под крышкой до готовности.",
        ],
      },
    ],
    advice: {
      temperature: "Готовьте на среднем огне.",
      time: "5-7 минут",
      otherAdvice: ["Не пересушивайте омлет — он должен остаться мягким."],
    },
  },

  {
    id: 2,
    title: "Овсяная каша с яблоком и корицей",
    imageUrl: "/image/recipe/recipe-2.webp",
    nutrients: { protein: 10, fat: 4, carbohydrates: 34 },
    calorieContent: 230,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Тёплая овсяная каша с яблоком и корицей — полезный и уютный завтрак.",
    ingredients: [
      "Овсяные хлопья - 60г.",
      "Яблоко - 1шт.",
      "Вода или растительное молоко - 250мл.",
      "Корица - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Яблоко очистите и нарежьте кубиками."],
      },
      {
        stageName: "Варка",
        stageList: [
          "Доведите жидкость до кипения.",
          "Добавьте овсянку и варите 3-5 минут.",
          "Добавьте яблоко и корицу, перемешайте.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5-7 минут",
      otherAdvice: [
        "Для сладости можно добавить немного мёда после приготовления.",
      ],
    },
  },

  {
    id: 3,
    title: "Салат с киноа и авокадо",
    imageUrl: "/image/recipe/recipe-3.jpeg",
    nutrients: { protein: 14, fat: 11, carbohydrates: 32 },
    calorieContent: 320,
    private: false,
    ingestion: ["lunch"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Питательный салат с киноа и авокадо — отличный вариант для полезного обеда.",
    ingredients: [
      "Киноа - 70г.",
      "Авокадо - 1/2 шт.",
      "Помидоры черри - 100г.",
      "Оливковое масло - 1 ст.л.",
      "Лимонный сок - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Отварите киноа до готовности и остудите.",
          "Овощи нарежьте.",
        ],
      },
      {
        stageName: "Сборка салата",
        stageList: [
          "Смешайте киноа с овощами.",
          "Заправьте маслом и лимонным соком.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте комнатной температуры.",
      time: "15-20 минут",
      otherAdvice: ["Добавьте семена тыквы для текстуры."],
    },
  },

  {
    id: 4,
    title: "Куриная грудка на гриле",
    imageUrl: "/image/recipe/recipe-4.jpg",
    nutrients: { protein: 36, fat: 5, carbohydrates: 2 },
    calorieContent: 240,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Нежная куриная грудка на гриле — базовое блюдо для набора мышечной массы.",
    ingredients: [
      "Куриная грудка - 250г.",
      "Оливковое масло - 1 ч.л.",
      "Паприка, соль - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Грудку обсушите и натрите специями."],
      },
      {
        stageName: "Жарка",
        stageList: [
          "Разогрейте гриль или сковороду.",
          "Обжаривайте по 5-6 минут с каждой стороны.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "10-12 минут",
      otherAdvice: ["Дайте мясу отдохнуть 2-3 минуты перед подачей."],
    },
  },

  {
    id: 5,
    title: "Запечённые овощи с травами",
    imageUrl: "/image/recipe/recipe-5.jpg",
    nutrients: { protein: 7, fat: 9, carbohydrates: 24 },
    calorieContent: 260,
    private: false,
    ingestion: ["dinner"],
    cookingTime: "long",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Ароматные запечённые овощи — лёгкий ужин для восстановления организма.",
    ingredients: [
      "Кабачок - 150г.",
      "Морковь - 100г.",
      "Брокколи - 150г.",
      "Оливковое масло - 1 ст.л.",
      "Итальянские травы - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Овощи нарежьте крупными кусками.",
          "Смешайте с маслом и травами.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: ["Выложите овощи на противень.", "Запекайте до мягкости."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "30-35 минут",
      otherAdvice: ["Перемешайте овощи в середине приготовления."],
    },
  },

  {
    id: 6,
    title: "Творожный боул с ягодами",
    imageUrl: "/image/recipe/recipe-6.webp",
    nutrients: { protein: 28, fat: 6, carbohydrates: 18 },
    calorieContent: 250,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description: "Белковый творожный боул — быстрый и полезный завтрак.",
    ingredients: [
      "Творог 5% - 200г.",
      "Ягоды - 100г.",
      "Мёд - 1 ч.л. (по желанию).",
    ],
    recipe: [
      {
        stageName: "Сборка",
        stageList: ["Выложите творог в миску.", "Добавьте ягоды и мёд."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "5 минут",
      otherAdvice: ["Можно добавить орехи или семена."],
    },
  },

  {
    id: 7,
    title: "Рыба на пару с лимоном",
    imageUrl: "/image/recipe/recipe-7.jpg",
    nutrients: { protein: 30, fat: 4, carbohydrates: 3 },
    calorieContent: 200,
    private: false,
    ingestion: ["dinner"],
    cookingTime: "middling",
    yourTarget: "weightLoss",
    complexity: "easy",
    description:
      "Диетическая рыба на пару — идеальный вариант для лёгкого ужина.",
    ingredients: ["Филе трески - 250г.", "Лимон - 1/2 шт.", "Соль - по вкусу."],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Рыбу посолите и сбрызните лимонным соком."],
      },
      {
        stageName: "Приготовление",
        stageList: ["Готовьте на пару до мягкости."],
      },
    ],
    advice: {
      temperature: "Пар",
      time: "10-12 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 8,
    title: "Смузи с бананом и арахисовой пастой",
    imageUrl: "/image/recipe/recipe-8.jpg",
    nutrients: { protein: 22, fat: 10, carbohydrates: 28 },
    calorieContent: 340,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Питательный смузи для восстановления энергии после тренировки.",
    ingredients: [
      "Банан - 1шт.",
      "Арахисовая паста - 1 ст.л.",
      "Молоко - 250мл.",
      "Протеин - 1 порция (по желанию).",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Поместите все ингредиенты в блендер.",
          "Взбейте до однородности.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Добавьте лёд для густоты."],
    },
  },

  {
    id: 9,
    title: "Индейка с овощами на сковороде",
    imageUrl: "/image/recipe/recipe-9.jpg",
    nutrients: { protein: 34, fat: 7, carbohydrates: 12 },
    calorieContent: 290,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description: "Сбалансированное блюдо с высоким содержанием белка.",
    ingredients: [
      "Филе индейки - 250г.",
      "Овощная смесь - 200г.",
      "Оливковое масло - 1 ст.л.",
      "Соль, специи - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Нарежьте индейку полосками."],
      },
      {
        stageName: "Жарка",
        stageList: [
          "Обжарьте индейку до готовности.",
          "Добавьте овощи и готовьте ещё 5 минут.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "15-18 минут",
      otherAdvice: ["Не пережаривайте мясо."],
    },
  },

  {
    id: 10,
    title: "Чиа-пудинг с кокосовым молоком",
    imageUrl: "/image/recipe/recipe-10.jpg",
    nutrients: { protein: 9, fat: 12, carbohydrates: 20 },
    calorieContent: 270,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "long",
    yourTarget: "detox",
    complexity: "easy",
    description: "Освежающий чиа-пудинг — полезный завтрак без готовки.",
    ingredients: [
      "Семена чиа - 3 ст.л.",
      "Кокосовое молоко - 250мл.",
      "Ягоды - 50г.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Смешайте чиа с молоком.",
          "Оставьте набухать в холодильнике.",
        ],
      },
    ],
    advice: {
      temperature: "Охлаждённое.",
      time: "4-6 часов",
      otherAdvice: ["Лучше готовить с вечера."],
    },
  },

  {
    id: 11,
    title: "Тыквенные маффины без сахара",
    imageUrl: "/image/recipe/recipe-11.jpg",
    nutrients: { protein: 10, fat: 5, carbohydrates: 22 },
    calorieContent: 180,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Нежные тыквенные маффины без сахара — вкусный и полезный перекус для всей семьи.",
    ingredients: [
      "Тыква - 200г.",
      "Яйца - 2шт.",
      "Мука овсяная - 50г.",
      "Разрыхлитель - 0.5 ч.л.",
      "Корица - 0.5 ч.л.",
      "Соль - щепотка.",
    ],
    recipe: [
      {
        stageName: "Подготовка ингредиентов",
        stageList: [
          "Тыкву очистите и натрите на терке.",
          "Яйца слегка взбейте.",
        ],
      },
      {
        stageName: "Смешивание теста",
        stageList: [
          "Соедините тыкву, яйца, муку, разрыхлитель и специи.",
          "Перемешайте до однородного состояния.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25-30 минут",
      otherAdvice: ["Используйте формы для маффинов или силиконовые вкладыши."],
    },
  },

  {
    id: 12,
    title: "Лосось с овощами в духовке",
    imageUrl: "/image/recipe/recipe-12.jpg",
    nutrients: { protein: 34, fat: 15, carbohydrates: 8 },
    calorieContent: 360,
    private: false,
    ingestion: ["dinner"],
    cookingTime: "long",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Полезный ужин с омега-3 и высоким содержанием белка для энергии и восстановления.",
    ingredients: [
      "Филе лосося - 200г.",
      "Брокколи - 150г.",
      "Морковь - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Лосось посолите и поперчите.",
          "Овощи нарежьте кусочками.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: [
          "Выложите рыбу и овощи на противень.",
          "Запекайте до готовности 20-25 минут.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20-25 минут",
      otherAdvice: ["Подавайте с долькой лимона."],
    },
  },

  {
    id: 13,
    title: "Смузи с манго и шпинатом",
    imageUrl: "/image/recipe/recipe-13.jpg",
    nutrients: { protein: 8, fat: 3, carbohydrates: 28 },
    calorieContent: 190,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий зелёный смузи с манго — заряд витаминов и энергии на день.",
    ingredients: [
      "Манго - 1шт.",
      "Шпинат - 50г.",
      "Вода или кокосовое молоко - 200мл.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Все ингредиенты положите в блендер.",
          "Взбейте до однородной массы.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить лёд для густоты."],
    },
  },

  {
    id: 14,
    title: "Запечённая куриная грудка с брокколи",
    imageUrl: "/image/recipe/recipe-14.jpg",
    nutrients: { protein: 35, fat: 7, carbohydrates: 6 },
    calorieContent: 250,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Белковый и питательный обед для активных людей и спортсменов.",
    ingredients: [
      "Куриная грудка - 200г.",
      "Брокколи - 150г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Курицу посолите и поперчите.",
          "Брокколи разделите на соцветия.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: ["Выложите всё на противень и запекайте 20 минут."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Не передерживайте курицу, чтобы она осталась сочной."],
    },
  },

  {
    id: 15,
    title: "Протеиновый боул с киноа и яйцом",
    imageUrl: "/image/recipe/recipe-15.jpg",
    nutrients: { protein: 28, fat: 9, carbohydrates: 32 },
    calorieContent: 370,
    private: false,
    ingestion: ["breakfast", "lunch"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытный боул с киноа и яйцом для завтрака или обеда с балансом БЖУ.",
    ingredients: [
      "Киноа - 70г.",
      "Яйцо - 2шт.",
      "Авокадо - 1/2 шт.",
      "Овощи - 100г.",
      "Оливковое масло - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление киноа",
        stageList: ["Отварите киноа до готовности."],
      },
      {
        stageName: "Сборка боула",
        stageList: [
          "Выложите киноа, нарезанные овощи, авокадо и варёные яйца в миску.",
          "Сбрызните маслом.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте тёплым или комнатной температуры.",
      time: "20 минут",
      otherAdvice: ["Можно добавить семена тыквы или кунжут."],
    },
  },

  {
    id: 16,
    title: "Овсяноблин с бананом и орехами",
    imageUrl: "/image/recipe/recipe-16.jpg",
    nutrients: { protein: 12, fat: 7, carbohydrates: 25 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Быстрый овсяноблин с бананом и орехами — вкусный и полезный завтрак.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Яйцо - 1шт.",
      "Банан - 1/2 шт.",
      "Орехи - 10г.",
      "Соль - щепотка.",
    ],
    recipe: [
      {
        stageName: "Приготовление теста",
        stageList: [
          "Смешайте овсяные хлопья, яйцо и банан.",
          "Добавьте измельчённые орехи.",
        ],
      },
      {
        stageName: "Жарка",
        stageList: [
          "Вылейте тесто на сковороду и обжарьте с двух сторон до золотистой корочки.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5-7 минут",
      otherAdvice: ["Не переворачивайте часто, чтобы блин остался целым."],
    },
  },

  {
    id: 17,
    title: "Салат с тунцом и яйцом",
    imageUrl: "/image/recipe/recipe-17.jpg",
    nutrients: { protein: 26, fat: 12, carbohydrates: 8 },
    calorieContent: 280,
    private: false,
    ingestion: ["lunch"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Лёгкий салат с тунцом и яйцом — отличный белковый обед для набора массы.",
    ingredients: [
      "Консервированный тунец в собственном соку - 100г.",
      "Яйцо варёное - 2шт.",
      "Листья салата - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Сборка салата",
        stageList: [
          "Листья салата нарежьте.",
          "Добавьте нарезанное яйцо и тунец.",
          "Заправьте маслом и лимонным соком.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте свежим.",
      time: "5 минут",
      otherAdvice: ["Можно добавить огурцы или помидоры черри."],
    },
  },

  {
    id: 18,
    title: "Суп-пюре из брокколи",
    imageUrl: "/image/recipe/recipe-18.jpg",
    nutrients: { protein: 10, fat: 6, carbohydrates: 18 },
    calorieContent: 180,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "long",
    yourTarget: "detox",
    complexity: "difficult",
    description:
      "Лёгкий суп-пюре из брокколи — полезный ужин с мягкой текстурой.",
    ingredients: [
      "Брокколи - 200г.",
      "Картофель - 100г.",
      "Морковь - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Варка овощей",
        stageList: ["Все овощи нарежьте и варите до мягкости."],
      },
      {
        stageName: "Пюрирование",
        stageList: [
          "Взбейте овощи в блендере до кремовой консистенции.",
          "Добавьте масло и приправы.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте горячим.",
      time: "20 минут",
      otherAdvice: ["Можно добавить немного нежирного йогурта перед подачей."],
    },
  },

  {
    id: 19,
    title: "Протеиновый смузи с ягодами",
    imageUrl: "/image/recipe/recipe-19.jpg",
    nutrients: { protein: 25, fat: 5, carbohydrates: 20 },
    calorieContent: 240,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Быстрый смузи с протеином и ягодами для восстановления после тренировки.",
    ingredients: [
      "Протеин - 1 порция.",
      "Ягоды - 100г.",
      "Молоко - 200мл.",
      "Банан - 1/2 шт.",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Все ингредиенты положите в блендер.",
          "Взбейте до однородности.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить лёд для густоты."],
    },
  },

  {
    id: 20,
    title: "Кабачковые оладьи с чесноком",
    imageUrl: "/image/recipe/recipe-20.jpg",
    nutrients: { protein: 12, fat: 6, carbohydrates: 18 },
    calorieContent: 200,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Лёгкие кабачковые оладьи с чесноком — питательный завтрак или перекус.",
    ingredients: [
      "Кабачок - 200г.",
      "Яйцо - 1шт.",
      "Мука цельнозерновая - 2 ст.л.",
      "Чеснок - 1 зубчик.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Кабачок натрите и слегка отожмите сок.",
          "Чеснок измельчите.",
        ],
      },
      {
        stageName: "Смешивание",
        stageList: ["Смешайте кабачок, яйцо, муку и специи."],
      },
      {
        stageName: "Жарка",
        stageList: [
          "Выложите оладьи на сковороду и обжарьте с двух сторон до золотистой корочки.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "7-10 минут",
      otherAdvice: ["Не пережаривайте, чтобы сохранить сочность."],
    },
  },

  {
    id: 21,
    title: "Овсянка с ягодами и орехами",
    imageUrl: "/image/recipe/recipe-21.jpg",
    nutrients: { protein: 12, fat: 7, carbohydrates: 28 },
    calorieContent: 230,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Полезный завтрак с овсянкой, ягодами и орехами для энергии на весь день.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Молоко или вода - 150мл.",
      "Ягоды - 50г.",
      "Орехи - 10г.",
      "Мёд - 1 ч.л. (по желанию).",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Сварите овсянку до готовности.",
          "Добавьте ягоды и орехи, перемешайте.",
        ],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5-7 минут",
      otherAdvice: ["Добавьте мёд после приготовления."],
    },
  },

  {
    id: 22,
    title: "Куриные тефтели с овощами",
    imageUrl: "/image/recipe/recipe-22.jpg",
    nutrients: { protein: 28, fat: 8, carbohydrates: 10 },
    calorieContent: 220,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытное и полезное блюдо с белком для набора массы и восстановления после тренировок.",
    ingredients: [
      "Куриный фарш - 200г.",
      "Морковь - 50г.",
      "Цукини - 50г.",
      "Лук - 30г.",
      "Соль, перец - по вкусу.",
      "Оливковое масло - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Подготовка фарша",
        stageList: [
          "Овощи измельчите и смешайте с фаршем.",
          "Приправьте специями.",
        ],
      },
      {
        stageName: "Формирование и готовка",
        stageList: [
          "Сформируйте тефтели.",
          "Обжарьте на сковороде с маслом 5-6 минут с каждой стороны.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "12-15 минут",
      otherAdvice: ["Можно подавать с зеленью."],
    },
  },

  {
    id: 23,
    title: "Салат с авокадо и яйцом",
    imageUrl: "/image/recipe/recipe-23.jpg",
    nutrients: { protein: 14, fat: 15, carbohydrates: 10 },
    calorieContent: 260,
    private: false,
    ingestion: ["lunch", "breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Свежий салат с авокадо и яйцом для лёгкого и питательного завтрака или обеда.",
    ingredients: [
      "Авокадо - 1/2 шт.",
      "Яйцо варёное - 2шт.",
      "Листья салата - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Сборка салата",
        stageList: [
          "Нарежьте авокадо и яйца.",
          "Смешайте с листьями салата и заправьте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте свежим.",
      time: "5 минут",
      otherAdvice: ["Можно добавить семена тыквы."],
    },
  },

  {
    id: 24,
    title: "Суп из тыквы и моркови",
    imageUrl: "/image/recipe/recipe-24.jpg",
    nutrients: { protein: 7, fat: 6, carbohydrates: 20 },
    calorieContent: 180,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "long",
    yourTarget: "detox",
    complexity: "difficult",
    description:
      "Лёгкий суп-пюре из тыквы и моркови — отличный вариант для ужина без тяжести.",
    ingredients: [
      "Тыква - 200г.",
      "Морковь - 100г.",
      "Лук - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Варка овощей",
        stageList: [
          "Нарежьте овощи и варите до мягкости.",
          "Пюрируйте в блендере и добавьте масло.",
        ],
      },
    ],
    advice: {
      temperature: "Горячий суп.",
      time: "20-25 минут",
      otherAdvice: ["Можно добавить щепотку мускатного ореха."],
    },
  },

  {
    id: 25,
    title: "Протеиновый боул с курицей",
    imageUrl: "/image/recipe/recipe-25.jpg",
    nutrients: { protein: 32, fat: 10, carbohydrates: 20 },
    calorieContent: 350,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Боул с курицей, овощами и киноа — отличный белковый обед для спортсменов.",
    ingredients: [
      "Куриная грудка - 150г.",
      "Киноа - 50г.",
      "Овощи свежие - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Специи - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Куриное филе обжарьте до готовности.",
          "Киноа отварите, овощи нарежьте.",
          "Соберите боул и заправьте маслом.",
        ],
      },
    ],
    advice: {
      temperature: "Тёплый боул.",
      time: "20 минут",
      otherAdvice: ["Можно добавить немного авокадо."],
    },
  },

  {
    id: 26,
    title: "Смузи с клубникой и бананом",
    imageUrl: "/image/recipe/recipe-26.jpg",
    nutrients: { protein: 10, fat: 4, carbohydrates: 25 },
    calorieContent: 180,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Лёгкий смузи с ягодами и бананом — отличный вариант для завтрака или перекуса.",
    ingredients: [
      "Банан - 1 шт.",
      "Клубника - 100г.",
      "Молоко или вода - 200мл.",
      "Мёд - 1 ч.л. (по желанию).",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Поместите все ингредиенты в блендер.",
          "Взбейте до однородной массы.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить лёд."],
    },
  },

  {
    id: 27,
    title: "Овсяные панкейки с ягодами",
    imageUrl: "/image/recipe/recipe-27.webp",
    nutrients: { protein: 14, fat: 6, carbohydrates: 28 },
    calorieContent: 250,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Полезные панкейки с овсянкой и ягодами для вкусного завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Яйцо - 1шт.",
      "Ягоды - 50г.",
      "Молоко - 100мл.",
      "Разрыхлитель - 0.5 ч.л.",
    ],
    recipe: [
      {
        stageName: "Смешивание теста",
        stageList: ["Смешайте все ингредиенты до однородного состояния."],
      },
      {
        stageName: "Жарка",
        stageList: [
          "Выпекайте на сковороде с антипригарным покрытием по 2-3 минуты с каждой стороны.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5-7 минут",
      otherAdvice: ["Не переворачивайте часто."],
    },
  },

  {
    id: 28,
    title: "Салат с курицей и киноа",
    imageUrl: "/image/recipe/recipe-28.jpeg",
    nutrients: { protein: 28, fat: 8, carbohydrates: 22 },
    calorieContent: 320,
    private: false,
    ingestion: ["lunch"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытный салат с курицей и киноа — отличный вариант обеда для активного дня.",
    ingredients: [
      "Куриная грудка - 150г.",
      "Киноа - 50г.",
      "Овощи - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Отварите или обжарьте курицу.",
          "Сварите киноа.",
          "Смешайте с овощами и заправьте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Комнатная температура.",
      time: "20 минут",
      otherAdvice: ["Можно добавить зелень."],
    },
  },

  {
    id: 29,
    title: "Творожный боул с бананом",
    imageUrl: "/image/recipe/recipe-29.webp",
    nutrients: { protein: 25, fat: 5, carbohydrates: 20 },
    calorieContent: 240,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Лёгкий творожный боул с бананом — быстрый и полезный завтрак или перекус.",
    ingredients: [
      "Творог 5% - 150г.",
      "Банан - 1 шт.",
      "Ягоды - 50г.",
      "Мёд - 1 ч.л. (по желанию).",
    ],
    recipe: [
      {
        stageName: "Сборка боула",
        stageList: [
          "Выложите творог в миску.",
          "Добавьте нарезанный банан и ягоды.",
          "Полейте мёдом.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа или орехи."],
    },
  },

  {
    id: 30,
    title: "Запечённая треска с овощами",
    imageUrl: "/image/recipe/recipe-30.jpg",
    nutrients: { protein: 30, fat: 5, carbohydrates: 8 },
    calorieContent: 240,
    private: false,
    ingestion: ["dinner"],
    cookingTime: "middling",
    yourTarget: "weightLoss",
    complexity: "middle",
    description:
      "Полезная запечённая треска с овощами — лёгкий ужин без лишних калорий.",
    ingredients: [
      "Филе трески - 200г.",
      "Брокколи - 100г.",
      "Морковь - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Нарежьте овощи и выложите на противень.",
          "Филе трески посолите и поперчите.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: [
          "Выложите рыбу на овощи и запекайте до готовности 20 минут.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте с лимоном."],
    },
  },

  {
    id: 31,
    title: "Кабачковые запеканки с сыром",
    imageUrl: "/image/recipe/recipe-31.jpg",
    nutrients: { protein: 15, fat: 8, carbohydrates: 12 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast", "lunch"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "difficult",
    description:
      "Лёгкая и вкусная запеканка с кабачками и сыром для завтрака или обеда.",
    ingredients: [
      "Кабачок - 200г.",
      "Яйца - 2шт.",
      "Твёрдый сыр - 50г.",
      "Молоко - 50мл.",
      "Соль, перец - по вкусу.",
      "Оливковое масло - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Подготовка ингредиентов",
        stageList: [
          "Кабачок натрите на тёрке и отожмите лишнюю влагу.",
          "Сыр натрите на крупной тёрке.",
        ],
      },
      {
        stageName: "Смешивание и запекание",
        stageList: [
          "Смешайте яйца, молоко, кабачок и сыр.",
          "Выложите в форму и запекайте до золотистой корочки.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Можно посыпать сверху зеленью перед подачей."],
    },
  },

  {
    id: 32,
    title: "Смузи с киви и шпинатом",
    imageUrl: "/image/recipe/recipe-32.webp",
    nutrients: { protein: 8, fat: 3, carbohydrates: 22 },
    calorieContent: 150,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Зелёный смузи для очищения организма и заряда энергии на утро.",
    ingredients: [
      "Киви - 1 шт.",
      "Шпинат - 50г.",
      "Яблоко - 1 шт.",
      "Вода - 150мл.",
      "Лёд - по желанию.",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Положите все ингредиенты в блендер.",
          "Взбейте до однородной массы.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа для густоты."],
    },
  },

  {
    id: 33,
    title: "Протеиновый омлет с овощами",
    imageUrl: "/image/recipe/recipe-33.jpeg",
    nutrients: { protein: 28, fat: 8, carbohydrates: 6 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast", "lunch"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Сытный омлет с овощами для завтрака с высоким содержанием белка.",
    ingredients: [
      "Яйца - 3шт.",
      "Болгарский перец - 50г.",
      "Шпинат - 30г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка овощей",
        stageList: ["Нарежьте перец и шпинат."],
      },
      {
        stageName: "Приготовление омлета",
        stageList: [
          "Взбейте яйца с солью и перцем.",
          "Обжарьте овощи 2 минуты, затем залейте яйцами и готовьте до готовности.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5-7 минут",
      otherAdvice: ["Не переворачивайте омлет, готовьте под крышкой."],
    },
  },

  {
    id: 34,
    title: "Боул с лососем и киноа",
    imageUrl: "/image/recipe/recipe-34.webp",
    nutrients: { protein: 32, fat: 12, carbohydrates: 25 },
    calorieContent: 380,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытный боул с лососем, киноа и овощами — идеальный обед для спортсменов.",
    ingredients: [
      "Филе лосося - 150г.",
      "Киноа - 50г.",
      "Овощи - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Лимон - 1 долька.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Запеките лосося 15 минут при 180°C.",
          "Отварите киноа и нарежьте овощи.",
          "Соберите боул и полейте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте тёплым."],
    },
  },

  {
    id: 35,
    title: "Суп-пюре из цветной капусты",
    imageUrl: "/image/recipe/recipe-35.jpg",
    nutrients: { protein: 8, fat: 5, carbohydrates: 15 },
    calorieContent: 160,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "long",
    yourTarget: "detox",
    complexity: "difficult",
    description:
      "Нежный суп-пюре из цветной капусты для лёгкого ужина без лишних калорий.",
    ingredients: [
      "Цветная капуста - 200г.",
      "Картофель - 50г.",
      "Лук - 30г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Варка овощей",
        stageList: [
          "Нарежьте овощи и отварите до мягкости.",
          "Взбейте блендером до однородного состояния.",
        ],
      },
    ],
    advice: {
      temperature: "Горячий суп.",
      time: "20 минут",
      otherAdvice: ["Можно добавить специи по вкусу."],
    },
  },

  {
    id: 36,
    title: "Смузи с манго и бананом",
    imageUrl: "/image/recipe/recipe-36.png",
    nutrients: { protein: 7, fat: 3, carbohydrates: 28 },
    calorieContent: 180,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий смузи с манго и бананом — быстрый и полезный завтрак или перекус.",
    ingredients: [
      "Манго - 1 шт.",
      "Банан - 1 шт.",
      "Вода или кокосовое молоко - 200мл.",
      "Лёд - по желанию.",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Положите все ингредиенты в блендер и взбейте до однородности.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа."],
    },
  },

  {
    id: 37,
    title: "Творожная запеканка с яблоком",
    imageUrl: "/image/recipe/recipe-37.webp",
    nutrients: { protein: 22, fat: 7, carbohydrates: 18 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Полезная творожная запеканка с яблоками — вкусный завтрак или перекус.",
    ingredients: [
      "Творог 5% - 200г.",
      "Яблоко - 1 шт.",
      "Яйцо - 1шт.",
      "Мука цельнозерновая - 2 ст.л.",
      "Соль, корица - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Смешайте творог, яйцо, муку и нарезанное яблоко.",
          "Выложите в форму и запекайте 25 минут.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Можно полить мёдом перед подачей."],
    },
  },

  {
    id: 38,
    title: "Салат с креветками и авокадо",
    imageUrl: "/image/recipe/recipe-38.jpg",
    nutrients: { protein: 20, fat: 12, carbohydrates: 10 },
    calorieContent: 280,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Лёгкий салат с креветками и авокадо для белкового ужина или обеда.",
    ingredients: [
      "Креветки варёные - 100г.",
      "Авокадо - 1/2 шт.",
      "Листья салата - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Сборка салата",
        stageList: [
          "Нарежьте авокадо и смешайте с листьями салата.",
          "Добавьте креветки, заправьте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте свежим.",
      time: "5 минут",
      otherAdvice: ["Можно добавить специи по вкусу."],
    },
  },

  {
    id: 39,
    title: "Запечённая индейка с овощами",
    imageUrl: "/image/recipe/recipe-39.jpeg",
    nutrients: { protein: 35, fat: 10, carbohydrates: 12 },
    calorieContent: 330,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "long",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Полезный и сытный ужин с индейкой и овощами для активного дня.",
    ingredients: [
      "Филе индейки - 150г.",
      "Морковь - 50г.",
      "Цукини - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Нарежьте овощи и индейку.", "Приправьте специями."],
      },
      {
        stageName: "Запекание",
        stageList: ["Выложите всё на противень и запекайте 25 минут."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 40,
    title: "Овсяноблин с яблоком и корицей",
    imageUrl: "/image/recipe/recipe-40.jpeg",
    nutrients: { protein: 12, fat: 6, carbohydrates: 24 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Полезный овсяноблин с яблоком и корицей — быстрый завтрак для всей семьи.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Яйцо - 1шт.",
      "Яблоко - 1/2 шт.",
      "Корица - 0.5 ч.л.",
      "Молоко - 50мл.",
    ],
    recipe: [
      {
        stageName: "Приготовление теста",
        stageList: ["Смешайте все ингредиенты до однородности."],
      },
      {
        stageName: "Жарка",
        stageList: [
          "Вылейте на сковороду и обжарьте с двух сторон до золотистой корочки.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5-7 минут",
      otherAdvice: ["Можно добавить немного мёда."],
    },
  },

  {
    id: 41,
    title: "Боул с тунцом и овощами",
    imageUrl: "/image/recipe/recipe-41.webp",
    nutrients: { protein: 30, fat: 8, carbohydrates: 15 },
    calorieContent: 300,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытный боул с тунцом, овощами и киноа для полноценного обеда или ужина.",
    ingredients: [
      "Филе тунца - 150г.",
      "Киноа - 50г.",
      "Овощи свежие - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Отварите киноа и нарежьте овощи.",
          "Обжарьте тунца 5 минут с каждой стороны.",
          "Соберите боул и заправьте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Тёплый боул.",
      time: "15-20 минут",
      otherAdvice: ["Можно добавить свежую зелень."],
    },
  },

  {
    id: 42,
    title: "Смузи с шпинатом и ананасом",
    imageUrl: "/image/recipe/recipe-42.jpg",
    nutrients: { protein: 6, fat: 3, carbohydrates: 25 },
    calorieContent: 160,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Свежий зелёный смузи с ананасом для лёгкого начала дня и очищения организма.",
    ingredients: [
      "Шпинат - 50г.",
      "Ананас - 100г.",
      "Банан - 1 шт.",
      "Вода - 200мл.",
      "Лёд - по желанию.",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Поместите все ингредиенты в блендер и взбейте до однородности.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена льна."],
    },
  },

  {
    id: 43,
    title: "Творожные маффины с ягодами",
    imageUrl: "/image/recipe/recipe-43.jpg",
    nutrients: { protein: 20, fat: 7, carbohydrates: 22 },
    calorieContent: 250,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Полезные творожные маффины с ягодами — идеальный завтрак или перекус.",
    ingredients: [
      "Творог 5% - 150г.",
      "Яйцо - 1шт.",
      "Ягоды - 50г.",
      "Мука цельнозерновая - 2 ст.л.",
      "Соль, разрыхлитель - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Приготовление теста",
        stageList: ["Смешайте творог, яйцо, муку и ягоды."],
      },
      {
        stageName: "Запекание",
        stageList: ["Выложите тесто в формы и запекайте 25 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Можно добавить немного мёда."],
    },
  },

  {
    id: 44,
    title: "Запечённый лосось с брокколи",
    imageUrl: "/image/recipe/recipe-44.jpg",
    nutrients: { protein: 32, fat: 10, carbohydrates: 10 },
    calorieContent: 320,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "difficult",
    description:
      "Полезный ужин с лососем и брокколи для поддержания мышечной массы.",
    ingredients: [
      "Филе лосося - 150г.",
      "Брокколи - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Приправьте лосось и брокколи.", "Выложите на противень."],
      },
      {
        stageName: "Запекание",
        stageList: ["Запекайте 20 минут при 180°C до готовности."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте с лимоном."],
    },
  },

  {
    id: 45,
    title: "Овсянка с яблоком и корицей",
    imageUrl: "/image/recipe/recipe-45.jpg",
    nutrients: { protein: 10, fat: 5, carbohydrates: 30 },
    calorieContent: 200,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Простая и питательная овсянка с яблоком и корицей для завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Яблоко - 1 шт.",
      "Молоко - 150мл.",
      "Корица - 0.5 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку, добавьте нарезанное яблоко и корицу."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить орехи или мёд."],
    },
  },

  {
    id: 46,
    title: "Салат с тунцом и яйцом",
    imageUrl: "/image/recipe/recipe-46.jpg",
    nutrients: { protein: 25, fat: 12, carbohydrates: 10 },
    calorieContent: 280,
    private: false,
    ingestion: ["lunch"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description: "Простой салат с тунцом и яйцом для лёгкого белкового обеда.",
    ingredients: [
      "Филе тунца - 100г.",
      "Яйцо варёное - 2шт.",
      "Листья салата - 50г.",
      "Оливковое масло - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Сборка салата",
        stageList: ["Нарежьте ингредиенты и смешайте.", "Заправьте маслом."],
      },
    ],
    advice: {
      temperature: "Подавайте свежим.",
      time: "5 минут",
      otherAdvice: ["Можно добавить специи по вкусу."],
    },
  },

  {
    id: 47,
    title: "Протеиновый смузи с арахисовой пастой",
    imageUrl: "/image/recipe/recipe-47.jpg",
    nutrients: { protein: 15, fat: 8, carbohydrates: 20 },
    calorieContent: 250,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Смузи с бананом и арахисовой пастой для быстрого белкового перекуса.",
    ingredients: [
      "Банан - 1 шт.",
      "Молоко - 200мл.",
      "Арахисовая паста - 1 ст.л.",
      "Протеиновый порошок - 1 мерная ложка (по желанию).",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить лед для свежести."],
    },
  },

  {
    id: 48,
    title: "Запечённая куриная грудка с овощами",
    imageUrl: "/image/recipe/recipe-48.jpg",
    nutrients: { protein: 35, fat: 7, carbohydrates: 12 },
    calorieContent: 320,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "difficult",
    description:
      "Сытное и полезное блюдо с куриной грудкой и овощами для ужина или обеда.",
    ingredients: [
      "Куриная грудка - 150г.",
      "Цукини - 50г.",
      "Морковь - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Нарежьте овощи и курицу.", "Приправьте специями."],
      },
      {
        stageName: "Запекание",
        stageList: [
          "Выложите всё на противень и запекайте 25 минут при 180°C.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 49,
    title: "Овсяноблин с ягодами",
    imageUrl: "/image/recipe/recipe-49.jpg",
    nutrients: { protein: 12, fat: 5, carbohydrates: 25 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Быстрый завтрак с овсяноблином и свежими ягодами для энергии на утро.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Яйцо - 1шт.",
      "Ягоды - 50г.",
      "Молоко - 50мл.",
    ],
    recipe: [
      {
        stageName: "Приготовление теста",
        stageList: [
          "Смешайте овсяные хлопья, яйцо, молоко и ягоды.",
          "Обжарьте на сковороде 2-3 минуты с каждой стороны.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного мёда."],
    },
  },

  {
    id: 50,
    title: "Салат с киноа и овощами",
    imageUrl: "/image/recipe/recipe-50.webp",
    nutrients: { protein: 15, fat: 7, carbohydrates: 25 },
    calorieContent: 260,
    private: false,
    ingestion: ["lunch"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Полезный салат с киноа и овощами для лёгкого и сытного обеда.",
    ingredients: [
      "Киноа - 50г.",
      "Овощи свежие - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
      "Соль, перец - по вкусу.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Отварите киноа.",
          "Нарежьте овощи и смешайте с киноа.",
          "Заправьте маслом и лимонным соком.",
        ],
      },
    ],
    advice: {
      temperature: "Комнатная температура.",
      time: "15 минут",
      otherAdvice: ["Можно добавить зелень или семена тыквы."],
    },
  },
  {
    id: 51,
    title: "Запечённые овощи с тофу",
    imageUrl: "/image/recipe/recipe-51.jpg",
    nutrients: { protein: 18, fat: 8, carbohydrates: 20 },
    calorieContent: 240,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "detox",
    complexity: "middle",
    description:
      "Полезное и сытное блюдо с овощами и тофу для лёгкого ужина или обеда.",
    ingredients: [
      "Тофу - 150г.",
      "Брокколи - 50г.",
      "Морковь - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец, специи - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Нарежьте овощи и тофу кубиками.",
          "Приправьте специями и маслом.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: ["Выложите на противень и запекайте 20 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте с зеленью или соевым соусом."],
    },
  },

  {
    id: 52,
    title: "Смузи с клубникой и бананом",
    imageUrl: "/image/recipe/recipe-52.jpg",
    nutrients: { protein: 7, fat: 2, carbohydrates: 25 },
    calorieContent: 150,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Вкусный смузи с клубникой и бананом — лёгкий завтрак или перекус.",
    ingredients: [
      "Клубника - 100г.",
      "Банан - 1 шт.",
      "Вода или молоко - 200мл.",
      "Лёд - по желанию.",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Поместите все ингредиенты в блендер и взбейте до однородности.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа для текстуры."],
    },
  },

  {
    id: 53,
    title: "Творожная запеканка с тыквой",
    imageUrl: "/image/recipe/recipe-53.jpg",
    nutrients: { protein: 22, fat: 7, carbohydrates: 18 },
    calorieContent: 230,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Сытная и полезная запеканка с творогом и тыквой — вкусный завтрак или перекус.",
    ingredients: [
      "Творог 5% - 200г.",
      "Тыква - 100г.",
      "Яйцо - 1шт.",
      "Мука цельнозерновая - 2 ст.л.",
      "Соль, корица - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Смешайте творог, тыкву, яйцо и муку.",
          "Выложите в форму и запекайте 25 минут при 180°C.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Можно полить мёдом перед подачей."],
    },
  },

  {
    id: 54,
    title: "Салат с курицей и авокадо",
    imageUrl: "/image/recipe/recipe-54.jpg",
    nutrients: { protein: 28, fat: 12, carbohydrates: 10 },
    calorieContent: 300,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Лёгкий и питательный салат с курицей и авокадо для обеда или ужина.",
    ingredients: [
      "Куриная грудка - 100г.",
      "Авокадо - 1/2 шт.",
      "Листья салата - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Сборка салата",
        stageList: [
          "Нарежьте курицу и авокадо.",
          "Смешайте с листьями салата и заправьте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Подавайте свежим.",
      time: "5 минут",
      otherAdvice: ["Можно добавить специи по вкусу."],
    },
  },

  {
    id: 55,
    title: "Овсянка с ягодами и орехами",
    imageUrl: "/image/recipe/recipe-55.jpg",
    nutrients: { protein: 12, fat: 6, carbohydrates: 28 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Полезная овсянка с ягодами и орехами для сытного и энергичного утра.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Ягоды - 50г.",
      "Молоко - 150мл.",
      "Орехи - 10г.",
      "Мёд - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку, добавьте ягоды, орехи и мёд."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного корицы."],
    },
  },

  {
    id: 56,
    title: "Смузи с яблоком и шпинатом",
    imageUrl: "/image/recipe/recipe-56.jpg",
    nutrients: { protein: 6, fat: 2, carbohydrates: 20 },
    calorieContent: 140,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий смузи с яблоком и шпинатом для лёгкого завтрака или перекуса.",
    ingredients: [
      "Шпинат - 50г.",
      "Яблоко - 1 шт.",
      "Вода - 200мл.",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена льна."],
    },
  },

  {
    id: 57,
    title: "Куриные тефтели с овощами",
    imageUrl: "/image/recipe/recipe-57.jpg",
    nutrients: { protein: 30, fat: 8, carbohydrates: 15 },
    calorieContent: 310,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытные куриные тефтели с овощами для полноценного обеда или ужина.",
    ingredients: [
      "Куриный фарш - 150г.",
      "Морковь - 50г.",
      "Цукини - 50г.",
      "Яйцо - 1шт.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Формирование тефтелей",
        stageList: ["Смешайте фарш с овощами и яйцом.", "Сформируйте тефтели."],
      },
      {
        stageName: "Запекание",
        stageList: ["Выложите на противень и запекайте 25 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 58,
    title: "Протеиновый смузи с ягодами",
    imageUrl: "/image/recipe/recipe-58.jpg",
    nutrients: { protein: 15, fat: 3, carbohydrates: 20 },
    calorieContent: 200,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Ягодный смузи с протеином для быстрого перекуса после тренировки.",
    ingredients: [
      "Ягоды - 100г.",
      "Молоко - 200мл.",
      "Протеиновый порошок - 1 мерная ложка",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородности."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа."],
    },
  },

  {
    id: 59,
    title: "Запечённая индейка с кабачками",
    imageUrl: "/image/recipe/recipe-59.jpeg",
    nutrients: { protein: 35, fat: 8, carbohydrates: 15 },
    calorieContent: 330,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Полезный ужин с индейкой и кабачками для поддержания формы и энергии.",
    ingredients: [
      "Филе индейки - 150г.",
      "Кабачки - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Нарежьте овощи и индейку.", "Приправьте специями."],
      },
      {
        stageName: "Запекание",
        stageList: [
          "Выложите всё на противень и запекайте 25 минут при 180°C.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 60,
    title: "Овсяноблин с бананом и корицей",
    imageUrl: "/image/recipe/recipe-60.jpg",
    nutrients: { protein: 12, fat: 5, carbohydrates: 26 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Вкусный овсяноблин с бананом и корицей для быстрого и полезного завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Банан - 1 шт.",
      "Яйцо - 1шт.",
      "Молоко - 50мл.",
      "Корица - 0.5 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление теста",
        stageList: ["Смешайте овсяные хлопья, яйцо, молоко и банан."],
      },
      {
        stageName: "Жарка",
        stageList: ["Обжарьте на сковороде 2-3 минуты с каждой стороны."],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного мёда."],
    },
  },

  {
    id: 61,
    title: "Салат с нутом и овощами",
    imageUrl: "/image/recipe/recipe-61.jpg",
    nutrients: { protein: 15, fat: 6, carbohydrates: 25 },
    calorieContent: 260,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "detox",
    complexity: "middle",
    description:
      "Полезный салат с нутом и овощами — сытный и лёгкий обед или ужин.",
    ingredients: [
      "Нут - 100г.",
      "Огурец - 50г.",
      "Помидор - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Отварите нут и нарежьте овощи.",
          "Смешайте и заправьте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Комнатная температура.",
      time: "15 минут",
      otherAdvice: ["Можно добавить свежую зелень."],
    },
  },

  {
    id: 62,
    title: "Протеиновый смузи с манго",
    imageUrl: "/image/recipe/recipe-62.jpg",
    nutrients: { protein: 14, fat: 3, carbohydrates: 22 },
    calorieContent: 200,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Смузи с манго и протеином для вкусного и питательного перекуса после тренировки.",
    ingredients: [
      "Манго - 100г.",
      "Молоко - 200мл.",
      "Протеиновый порошок - 1 мерная ложка",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена льна или чиа."],
    },
  },

  {
    id: 63,
    title: "Овсянка с грушей и орехами",
    imageUrl: "/image/recipe/recipe-63.webp",
    nutrients: { protein: 12, fat: 6, carbohydrates: 28 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description: "Вкусная овсянка с грушей и орехами для насыщенного завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Груша - 1 шт.",
      "Молоко - 150мл.",
      "Орехи - 10г.",
      "Мёд - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку, добавьте нарезанную грушу, орехи и мёд."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить корицу для аромата."],
    },
  },

  {
    id: 64,
    title: "Куриные рулетики с овощами",
    imageUrl: "/image/recipe/recipe-64.jpeg",
    nutrients: { protein: 32, fat: 8, carbohydrates: 12 },
    calorieContent: 320,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытные куриные рулетики с овощами для полноценного обеда или ужина.",
    ingredients: [
      "Куриная грудка - 150г.",
      "Морковь - 50г.",
      "Цукини - 50г.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Разрежьте грудку, начините овощами и сверните рулетики.",
          "Приправьте специями.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: ["Выложите на противень и запекайте 25 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 65,
    title: "Смузи с киви и шпинатом",
    imageUrl: "/image/recipe/recipe-65.jpg",
    nutrients: { protein: 6, fat: 2, carbohydrates: 20 },
    calorieContent: 140,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий зелёный смузи с киви и шпинатом для лёгкого завтрака.",
    ingredients: [
      "Киви - 1 шт.",
      "Шпинат - 50г.",
      "Вода - 200мл.",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа."],
    },
  },

  {
    id: 66,
    title: "Творожные оладьи с яблоком",
    imageUrl: "/image/recipe/recipe-66.webp",
    nutrients: { protein: 18, fat: 7, carbohydrates: 20 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Полезные творожные оладьи с яблоком — отличный завтрак или перекус.",
    ingredients: [
      "Творог 5% - 150г.",
      "Яблоко - 1 шт.",
      "Яйцо - 1шт.",
      "Мука цельнозерновая - 2 ст.л.",
      "Соль, корица - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление теста",
        stageList: [
          "Смешайте творог, яйцо, яблоко и муку.",
          "Выложите на сковороду и обжарьте по 2-3 минуты с каждой стороны.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5-6 минут",
      otherAdvice: ["Можно добавить немного мёда."],
    },
  },

  {
    id: 67,
    title: "Запечённая треска с овощами",
    imageUrl: "/image/recipe/recipe-67.jpg",
    nutrients: { protein: 32, fat: 7, carbohydrates: 12 },
    calorieContent: 310,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "difficult",
    description:
      "Полезное блюдо с треской и овощами для сытного обеда или ужина.",
    ingredients: [
      "Филе трески - 150г.",
      "Брокколи - 50г.",
      "Морковь - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Нарежьте овощи и треску.",
          "Приправьте специями и маслом.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: ["Запекайте 20-25 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20-25 минут",
      otherAdvice: ["Подавайте с лимоном."],
    },
  },

  {
    id: 68,
    title: "Смузи с апельсином и морковью",
    imageUrl: "/image/recipe/recipe-68.jpeg",
    nutrients: { protein: 5, fat: 2, carbohydrates: 22 },
    calorieContent: 150,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий смузи с апельсином и морковью для лёгкого завтрака.",
    ingredients: [
      "Морковь - 50г.",
      "Апельсин - 1 шт.",
      "Вода - 200мл.",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородности."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить имбирь для аромата."],
    },
  },

  {
    id: 69,
    title: "Овсянка с киви и семенами",
    imageUrl: "/image/recipe/recipe-69.webp",
    nutrients: { protein: 12, fat: 5, carbohydrates: 26 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description: "Полезная овсянка с киви и семенами чиа для энергичного утра.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Киви - 1 шт.",
      "Молоко - 150мл.",
      "Семена чиа - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку и добавьте киви и семена."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного мёда."],
    },
  },

  {
    id: 70,
    title: "Курица с томатами и базиликом",
    imageUrl: "/image/recipe/recipe-70.jpg",
    nutrients: { protein: 30, fat: 8, carbohydrates: 12 },
    calorieContent: 310,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Сытное блюдо с курицей, томатами и базиликом для обеда или ужина.",
    ingredients: [
      "Куриная грудка - 150г.",
      "Помидоры - 100г.",
      "Базилик свежий - 5г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Нарежьте помидоры и курицу.",
          "Приправьте специями и маслом, добавьте базилик.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: ["Запекайте 25 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 71,
    title: "Тёплый салат с киноа и овощами",
    imageUrl: "/image/recipe/recipe-71.jpg",
    nutrients: { protein: 14, fat: 6, carbohydrates: 28 },
    calorieContent: 260,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "detox",
    complexity: "middle",
    description:
      "Полезный салат с киноа и овощами для лёгкого и сытного обеда.",
    ingredients: [
      "Киноа - 50г.",
      "Брокколи - 50г.",
      "Морковь - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Отварите киноа и овощи.",
          "Смешайте и заправьте маслом и лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Тёплый салат.",
      time: "20 минут",
      otherAdvice: ["Можно добавить семена тыквы."],
    },
  },

  {
    id: 72,
    title: "Смузи с персиком и морковью",
    imageUrl: "/image/recipe/recipe-72.jpeg",
    nutrients: { protein: 6, fat: 2, carbohydrates: 22 },
    calorieContent: 150,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description: "Освежающий смузи с персиком и морковью для лёгкого перекуса.",
    ingredients: [
      "Персик - 1 шт.",
      "Морковь - 50г.",
      "Вода - 200мл.",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить немного имбиря."],
    },
  },

  {
    id: 73,
    title: "Запечённые баклажаны с сыром фета",
    imageUrl: "/image/recipe/recipe-73.jpg",
    nutrients: { protein: 16, fat: 10, carbohydrates: 14 },
    calorieContent: 260,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Полезное и сытное блюдо с баклажанами и сыром фета для обеда или ужина.",
    ingredients: [
      "Баклажан - 100г.",
      "Сыр фета - 50г.",
      "Помидоры - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Нарежьте баклажаны и помидоры, посыпьте сыром фета."],
      },
      {
        stageName: "Запекание",
        stageList: ["Запекайте 20 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 74,
    title: "Овсяноблин с ягодами и медом",
    imageUrl: "/image/recipe/recipe-74.jpg",
    nutrients: { protein: 12, fat: 5, carbohydrates: 25 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description: "Сытный овсяноблин с ягодами и медом для быстрого завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Ягоды - 50г.",
      "Яйцо - 1шт.",
      "Молоко - 50мл.",
      "Мёд - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Смешайте все ингредиенты и обжарьте на сковороде 2-3 минуты с каждой стороны.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5 минут",
      otherAdvice: ["Можно добавить орехи для текстуры."],
    },
  },

  {
    id: 75,
    title: "Салат с авокадо и киноа",
    imageUrl: "/image/recipe/recipe-75.jpg",
    nutrients: { protein: 14, fat: 8, carbohydrates: 24 },
    calorieContent: 270,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Полезный салат с авокадо и киноа для лёгкого и питательного обеда.",
    ingredients: [
      "Киноа - 50г.",
      "Авокадо - 1/2 шт.",
      "Помидоры - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Отварите киноа, нарежьте овощи и авокадо, смешайте и заправьте.",
        ],
      },
    ],
    advice: {
      temperature: "Комнатная температура.",
      time: "15 минут",
      otherAdvice: ["Можно добавить семена кунжута."],
    },
  },

  {
    id: 76,
    title: "Смузи с малиной и бананом",
    imageUrl: "/image/recipe/recipe-76.webp",
    nutrients: { protein: 7, fat: 2, carbohydrates: 22 },
    calorieContent: 150,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Вкусный смузи с малиной и бананом для лёгкого перекуса или завтрака.",
    ingredients: [
      "Малина - 50г.",
      "Банан - 1 шт.",
      "Вода или молоко - 200мл",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа."],
    },
  },

  {
    id: 77,
    title: "Творожная запеканка с яблоком",
    imageUrl: "/image/recipe/recipe-77.jpeg",
    nutrients: { protein: 22, fat: 7, carbohydrates: 18 },
    calorieContent: 230,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Сытная творожная запеканка с яблоком для завтрака или перекуса.",
    ingredients: [
      "Творог 5% - 200г.",
      "Яблоко - 1 шт.",
      "Яйцо - 1шт.",
      "Мука цельнозерновая - 2 ст.л.",
      "Соль, корица - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Смешайте творог, яйцо, яблоко и муку. Выложите в форму и запекайте 25 минут при 180°C.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Можно полить мёдом перед подачей."],
    },
  },

  {
    id: 78,
    title: "Запечённая курица с брокколи",
    imageUrl: "/image/recipe/recipe-78.jpg",
    nutrients: { protein: 32, fat: 8, carbohydrates: 14 },
    calorieContent: 320,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "difficult",
    description:
      "Сытный ужин с курицей и брокколи для поддержания мышечной массы.",
    ingredients: [
      "Куриная грудка - 150г.",
      "Брокколи - 100г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Нарежьте курицу и брокколи, приправьте специями."],
      },
      {
        stageName: "Запекание",
        stageList: ["Запекайте 25 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "25 минут",
      otherAdvice: ["Подавайте с лимоном."],
    },
  },

  {
    id: 79,
    title: "Овсянка с черникой и миндалём",
    imageUrl: "/image/recipe/recipe-79.jpg",
    nutrients: { protein: 12, fat: 6, carbohydrates: 26 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Полезная овсянка с черникой и миндалём для вкусного завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Черника - 50г.",
      "Молоко - 150мл.",
      "Миндаль - 10г.",
      "Мёд - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку, добавьте чернику, миндаль и мёд."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить корицу."],
    },
  },

  {
    id: 80,
    title: "Смузи с шпинатом и яблоком",
    imageUrl: "/image/recipe/recipe-80.jpg",
    nutrients: { protein: 6, fat: 2, carbohydrates: 18 },
    calorieContent: 140,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий зелёный смузи с шпинатом и яблоком для лёгкого завтрака.",
    ingredients: [
      "Шпинат - 50г.",
      "Яблоко - 1 шт.",
      "Вода - 200мл.",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить немного лимонного сока."],
    },
  },

  {
    id: 81,
    title: "Салат с тунцом и авокадо",
    imageUrl: "/image/recipe/recipe-81.jpg",
    nutrients: { protein: 22, fat: 10, carbohydrates: 12 },
    calorieContent: 260,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Лёгкий салат с тунцом и авокадо — быстрый и питательный обед или ужин.",
    ingredients: [
      "Тунец консервированный - 100г.",
      "Авокадо - 1/2 шт.",
      "Помидоры черри - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: [
          "Нарежьте авокадо и помидоры, смешайте с тунцом и заправьте маслом.",
        ],
      },
    ],
    advice: {
      temperature: "Комнатная температура.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного лимонного сока."],
    },
  },

  {
    id: 82,
    title: "Протеиновый смузи с ягодами",
    imageUrl: "/image/recipe/recipe-82.jpg",
    nutrients: { protein: 15, fat: 3, carbohydrates: 20 },
    calorieContent: 200,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Вкусный протеиновый смузи с ягодами для после-тренировочного перекуса.",
    ingredients: [
      "Ягоды замороженные - 100г.",
      "Молоко - 200мл.",
      "Протеиновый порошок - 1 мерная ложка",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить семена чиа."],
    },
  },

  {
    id: 83,
    title: "Творожный десерт с ягодами",
    imageUrl: "/image/recipe/recipe-83.jpg",
    nutrients: { protein: 18, fat: 6, carbohydrates: 20 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Полезный творожный десерт с ягодами для лёгкого завтрака или перекуса.",
    ingredients: [
      "Творог 5% - 150г.",
      "Ягоды - 50г.",
      "Мёд - 1 ч.л.",
      "Семена льна - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Смешайте творог с ягодами, мёдом и семенами льна."],
      },
    ],
    advice: {
      temperature: "Холодный десерт.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного орехов."],
    },
  },

  {
    id: 84,
    title: "Куриные котлеты на пару",
    imageUrl: "/image/recipe/recipe-84.jpg",
    nutrients: { protein: 28, fat: 7, carbohydrates: 10 },
    calorieContent: 270,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "middle",
    description:
      "Полезные куриные котлеты на пару для сытного и лёгкого обеда.",
    ingredients: [
      "Куриное филе - 150г.",
      "Лук - 30г.",
      "Морковь - 30г.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Пропустите курицу и овощи через мясорубку, сформируйте котлеты.",
        ],
      },
      {
        stageName: "Готовка на пару",
        stageList: ["Готовьте котлеты 15 минут на пару."],
      },
    ],
    advice: {
      temperature: "Паровая кастрюля.",
      time: "15 минут",
      otherAdvice: ["Подавайте с овощами на пару."],
    },
  },

  {
    id: 85,
    title: "Овсянка с бананом и арахисом",
    imageUrl: "/image/recipe/recipe-85.jpeg",
    nutrients: { protein: 12, fat: 7, carbohydrates: 28 },
    calorieContent: 240,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Сытная овсянка с бананом и арахисом для энергичного завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Банан - 1 шт.",
      "Арахис - 10г.",
      "Молоко - 150мл",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку, добавьте нарезанный банан и арахис."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить корицу."],
    },
  },

  {
    id: 86,
    title: "Смузи с ананасом и шпинатом",
    imageUrl: "/image/recipe/recipe-86.jpg",
    nutrients: { protein: 5, fat: 2, carbohydrates: 20 },
    calorieContent: 140,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий смузи с ананасом и шпинатом для лёгкого перекуса или завтрака.",
    ingredients: [
      "Ананас - 50г.",
      "Шпинат - 50г.",
      "Вода - 200мл",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить немного лимонного сока."],
    },
  },

  {
    id: 87,
    title: "Запечённые овощи с прованскими травами",
    imageUrl: "/image/recipe/recipe-87.webp",
    nutrients: { protein: 6, fat: 5, carbohydrates: 20 },
    calorieContent: 180,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "detox",
    complexity: "difficult",
    description:
      "Полезное и ароматное блюдо из запечённых овощей с прованскими травами.",
    ingredients: [
      "Морковь - 50г.",
      "Цукини - 50г.",
      "Болгарский перец - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Травы прованские - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: ["Нарежьте овощи, смешайте с маслом и травами."],
      },
      {
        stageName: "Запекание",
        stageList: ["Запекайте 20 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 88,
    title: "Творожный пудинг с ягодами",
    imageUrl: "/image/recipe/recipe-88.webp",
    nutrients: { protein: 18, fat: 5, carbohydrates: 18 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Лёгкий и вкусный творожный пудинг с ягодами для завтрака или перекуса.",
    ingredients: [
      "Творог 5% - 150г.",
      "Ягоды - 50г.",
      "Яйцо - 1шт.",
      "Мёд - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Смешайте творог с ягодами, яйцом и мёдом, запекайте 20 минут при 180°C.",
        ],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Можно добавить немного ванили."],
    },
  },

  {
    id: 89,
    title: "Смузи с клубникой и бананом",
    imageUrl: "/image/recipe/recipe-89.jpeg",
    nutrients: { protein: 6, fat: 2, carbohydrates: 22 },
    calorieContent: 150,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Вкусный и питательный смузи с клубникой и бананом для перекуса или завтрака.",
    ingredients: [
      "Клубника - 50г.",
      "Банан - 1 шт.",
      "Вода или молоко - 200мл",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить немного семян льна."],
    },
  },

  {
    id: 90,
    title: "Овсянка с яблоком и корицей",
    imageUrl: "/image/recipe/recipe-90.jpg",
    nutrients: { protein: 12, fat: 5, carbohydrates: 28 },
    calorieContent: 220,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description: "Полезная овсянка с яблоком и корицей для бодрого утра.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Яблоко - 1 шт.",
      "Молоко - 150мл.",
      "Корица - по вкусу",
      "Мёд - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Сварите овсянку, добавьте нарезанное яблоко, мёд и корицу.",
        ],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить орехи или семена."],
    },
  },

  {
    id: 91,
    title: "Салат из шпината с киноа и гранатом",
    imageUrl: "/image/recipe/recipe-91.jpg",
    nutrients: { protein: 12, fat: 7, carbohydrates: 22 },
    calorieContent: 210,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Лёгкий салат с киноа, шпинатом и гранатом для полезного обеда или ужина.",
    ingredients: [
      "Киноа - 50г.",
      "Шпинат - 50г.",
      "Гранат - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Отварите киноа, нарежьте шпинат, добавьте гранат и заправьте маслом с лимоном.",
        ],
      },
    ],
    advice: {
      temperature: "Комнатная температура.",
      time: "10 минут",
      otherAdvice: ["Можно добавить семена тыквы."],
    },
  },

  {
    id: 92,
    title: "Протеиновый овсяноблин с бананом",
    imageUrl: "/image/recipe/recipe-92.jpg",
    nutrients: { protein: 18, fat: 5, carbohydrates: 22 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "muscleGain",
    complexity: "easy",
    description:
      "Сытный и полезный овсяноблин с бананом и протеином для завтрака или перекуса.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Банан - 1 шт.",
      "Яйцо - 1 шт.",
      "Протеиновый порошок - 1 мерная ложка",
      "Молоко - 50мл",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: [
          "Смешайте все ингредиенты и обжарьте на сковороде по 2-3 минуты с каждой стороны.",
        ],
      },
    ],
    advice: {
      temperature: "Средний огонь.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного корицы."],
    },
  },

  {
    id: 93,
    title: "Смузи с киви и шпинатом",
    imageUrl: "/image/recipe/recipe-93.jpg",
    nutrients: { protein: 5, fat: 2, carbohydrates: 18 },
    calorieContent: 140,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий зелёный смузи с киви и шпинатом для лёгкого завтрака или перекуса.",
    ingredients: [
      "Киви - 1 шт.",
      "Шпинат - 50г.",
      "Вода - 200мл",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить немного лимонного сока."],
    },
  },

  {
    id: 94,
    title: "Куриные тефтели с овощами",
    imageUrl: "/image/recipe/recipe-94.jpg",
    nutrients: { protein: 28, fat: 8, carbohydrates: 12 },
    calorieContent: 280,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "muscleGain",
    complexity: "difficult",
    description:
      "Сытное блюдо с куриными тефтелями и овощами для обеда или ужина.",
    ingredients: [
      "Куриное филе - 150г.",
      "Морковь - 30г.",
      "Цукини - 30г.",
      "Лук - 30г.",
      "Соль, перец - по вкусу",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Пропустите курицу и овощи через мясорубку, сформируйте тефтели.",
        ],
      },
      {
        stageName: "Готовка",
        stageList: ["Запекайте тефтели 20 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте с зеленью или соусом на выбор."],
    },
  },

  {
    id: 95,
    title: "Овсянка с грушей и орехами",
    imageUrl: "/image/recipe/recipe-95.webp",
    nutrients: { protein: 12, fat: 7, carbohydrates: 26 },
    calorieContent: 240,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description: "Полезная овсянка с грушей и орехами для бодрого утра.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Груша - 1 шт.",
      "Молоко - 150мл",
      "Орехи - 10г.",
      "Мёд - по вкусу",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку, добавьте нарезанную грушу, орехи и мёд."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить корицу."],
    },
  },

  {
    id: 96,
    title: "Смузи с манго и бананом",
    imageUrl: "/image/recipe/recipe-96.jpg",
    nutrients: { protein: 6, fat: 2, carbohydrates: 20 },
    calorieContent: 150,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description:
      "Вкусный смузи с манго и бананом для лёгкого перекуса или завтрака.",
    ingredients: [
      "Манго - 50г.",
      "Банан - 1 шт.",
      "Вода или молоко - 200мл",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить немного семян льна."],
    },
  },

  {
    id: 97,
    title: "Запечённые кабачки с томатами",
    imageUrl: "/image/recipe/recipe-97.jpg",
    nutrients: { protein: 6, fat: 5, carbohydrates: 18 },
    calorieContent: 170,
    private: false,
    ingestion: ["lunch", "dinner"],
    cookingTime: "middling",
    yourTarget: "detox",
    complexity: "difficult",
    description: "Полезное и лёгкое блюдо из запечённых кабачков с томатами.",
    ingredients: [
      "Кабачок - 100г.",
      "Помидоры - 50г.",
      "Оливковое масло - 1 ч.л.",
      "Прованские травы - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Подготовка",
        stageList: [
          "Нарежьте кабачки и помидоры, смешайте с маслом и травами.",
        ],
      },
      {
        stageName: "Запекание",
        stageList: ["Запекайте 20 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Подавайте с зеленью."],
    },
  },

  {
    id: 98,
    title: "Творожные кексы с бананом",
    imageUrl: "/image/recipe/recipe-98.jpeg",
    nutrients: { protein: 18, fat: 6, carbohydrates: 18 },
    calorieContent: 210,
    private: false,
    ingestion: ["breakfast", "snack"],
    cookingTime: "middling",
    yourTarget: "weightSupport",
    complexity: "middle",
    description:
      "Полезные творожные кексы с бананом для завтрака или перекуса.",
    ingredients: [
      "Творог 5% - 150г.",
      "Банан - 1 шт.",
      "Яйцо - 1шт.",
      "Мука цельнозерновая - 2 ст.л.",
      "Мёд - 1 ч.л.",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Смешайте все ингредиенты и запекайте 20 минут при 180°C."],
      },
    ],
    advice: {
      temperature: "180°C",
      time: "20 минут",
      otherAdvice: ["Можно добавить корицу или ваниль."],
    },
  },

  {
    id: 99,
    title: "Смузи с апельсином и морковью",
    imageUrl: "/image/recipe/recipe-99.jpg",
    nutrients: { protein: 5, fat: 2, carbohydrates: 20 },
    calorieContent: 140,
    private: false,
    ingestion: ["smoothie"],
    cookingTime: "fast",
    yourTarget: "detox",
    complexity: "easy",
    description:
      "Освежающий смузи с апельсином и морковью для лёгкого перекуса или завтрака.",
    ingredients: [
      "Апельсин - 1 шт.",
      "Морковь - 50г.",
      "Вода - 200мл",
      "Лёд - по желанию",
    ],
    recipe: [
      {
        stageName: "Смешивание",
        stageList: ["Взбейте все ингредиенты в блендере до однородной массы."],
      },
    ],
    advice: {
      temperature: "Подавайте охлаждённым.",
      time: "3-5 минут",
      otherAdvice: ["Можно добавить немного имбиря."],
    },
  },

  {
    id: 100,
    title: "Овсянка с курагой и орехами",
    imageUrl: "/image/recipe/recipe-100.jpg",
    nutrients: { protein: 12, fat: 7, carbohydrates: 28 },
    calorieContent: 240,
    private: false,
    ingestion: ["breakfast"],
    cookingTime: "fast",
    yourTarget: "weightSupport",
    complexity: "easy",
    description: "Полезная овсянка с курагой и орехами для сытного завтрака.",
    ingredients: [
      "Овсяные хлопья - 50г.",
      "Курага - 30г.",
      "Орехи - 10г.",
      "Молоко - 150мл",
    ],
    recipe: [
      {
        stageName: "Приготовление",
        stageList: ["Сварите овсянку, добавьте курагу и орехи."],
      },
    ],
    advice: {
      temperature: "Тёплая каша.",
      time: "5 минут",
      otherAdvice: ["Можно добавить немного мёда."],
    },
  },
]

export default recipesDishBD
