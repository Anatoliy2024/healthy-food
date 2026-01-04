const recipesDishBD = [
  {
    id: 1,
    title: "Омлет с тунцом",
    imageUrl: "/image/recipe-1.png",
    nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
    calorieContent: 212,
    private: false,
  },
  {
    id: 2,
    title: "Ленивые вареники",
    imageUrl: "/image/recipe-2.png",
    nutrients: { protein: 17, fat: 4, carbohydrates: 15 },
    calorieContent: 180,
    private: false,
  },
  {
    id: 3,
    title: "Овсяноблин с бананом и сыром",
    imageUrl: "/image/recipe-3.png",
    nutrients: { protein: 10, fat: 4, carbohydrates: 25 },
    calorieContent: 150,
    private: false,
  },
  {
    id: 4,
    title: "Тост с глазуньей и рукколой",
    imageUrl: "/image/recipe-4.png",
    nutrients: { protein: 14, fat: 11, carbohydrates: 13 },
    calorieContent: 202,
    private: false,
  },
  {
    id: 5,
    title: "Пшеничная каша с яблоком и корицей",
    imageUrl: "/image/recipe-5.png",
    nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
    calorieContent: 212,
    private: true,
  },
  {
    id: 6,
    title: "Сырники с тыквой",
    imageUrl: "/image/recipe-6.png",
    nutrients: { protein: 17, fat: 5, carbohydrates: 19 },
    calorieContent: 196,
    private: false,
  },
  {
    id: 7,
    title: "Творожная запеканка с ягодами",
    imageUrl: "/image/recipe-7.png",
    nutrients: { protein: 27, fat: 7, carbohydrates: 13 },
    calorieContent: 187,
    private: false,
  },
  {
    id: 8,
    title: "Куриные маффины с сыром",
    imageUrl: "/image/recipe-8.png",
    nutrients: { protein: 23, fat: 7, carbohydrates: 8 },
    calorieContent: 178,
    private: false,
    ingestion: ["breakfast", "lunch"], //smoothie,dinner
    cookingTime: "middling", //fast,long
    yourTarget: "weightSupport", //muscleGain,detox,weightLoss
    complexity: "middle", //easy,difficult
    description:
      "Эти аппетитные куриные маффины с сыром - идеальное решение для тех, кто ищет питательный, но при этом легкий и удобный вариант для завтрака, обеда или перекуса. ",
    ingredients: [
      "куриное филе - 300г.",
      "Яйца куриные - 3шт.",
      "Твердый сыр (например, чеддер, гауда, моцарелла) - 100г.",
      "Молоко (или нежирные сливки) - 50мл.",
      "Мука цельнозерновая (или рисовая, овсяная) - 2 ст.л. (по желанию, для более плотной текстуры).",
      "Соль - по вкусу.",
      "Черный перец молотый - по вкусу.",
      "Сушеный чеснок, паприка, итальянские травы - по 1/2 ч.л. (по желанию).",
      "Растительное масло - для смазывания формы.",
    ],
    recipe: [
      {
        stageName: "Подготовка ингредиентов",
        stageList: [
          "Куриное филе промойте, обсушите бумажным полотенцем. Нарежьте очень мелкими кубиками (примерно 0.5-0.7 см).",
          "Сыр натрите на крупной терке.",
          "Если используете лук, болгарский перец, чеснок: мелко нарежьте их. Шампиньоны нарежьте и слегка обжарьте до испарения влаги.",
          "Зелень мелко порубите.",
        ],
      },
      {
        stageName: "Смешивание основы",
        stageList: [
          "В глубокой миске слегка взбейте яйца с молоком.",
          "Добавьте нарезанное куриное филе, натертый сыр, все выбранные дополнительные ингредиенты (лук, перец, зелень, чеснок, грибы и т.д.).",
          "Если используете муку и разрыхлитель, просейте их вместе и добавьте к остальным ингредиентам. Хорошо перемешайте, чтобы не было комочков.",
          "Приправьте солью, черным перцем и любыми другими специями по вкусу. Тщательно перемешайте до однородности.",
        ],
      },
    ],
    advice: {
      temperature: "Разогрейте духовку до 180°C.",
      time: "выпекайте 25-35 минут",
      otherAdvice: [
        "Форму для маффинов смажьте растительным маслом или вложите в каждую ячейку бумажные вкладыши.",
        "пока маффины не станут золотистыми и не пропекутся внутри (проверить можно деревянной шпажкой – она должна выходить сухой).",
      ],
    },
  },
  {
    id: 9,
    title: "Панкейки с бананом",
    imageUrl: "/image/recipe-9.png",
    nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
    calorieContent: 212,
    private: false,
  },
]

export default recipesDishBD
