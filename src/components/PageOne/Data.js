const Recipes = [
  {
    id: 0,
    age: 9,
    type: "Abendbrei",
    image: "./images/1.jpg",
    name: "Babybrei mit Schmelzflocken und Erdbeeren",
    ingredients: ["20g Schmelzflocken", "200ml Vollmilch", "ca. 3-4 Erdbeeren"],
    method: [
      "Die Schmelzflocken mit der Milch aufkochen.",
      "Abkühlen lassen.",
      "Erdbeeren pürieren und zu dem Schmelzflockenbrei geben und verrühren."
    ]
  },
  {
    id: 1,
    age: 9,
    type: "Mittagsbrei",
    image: "./images/2.jpg",
    name: "Babybrei mit Erbsen und Hirseflocken",
    ingredients: [
      "100g Erbsen",
      "50g Kartoffeln",
      "10g Hirseflocken",
      "1 EL Rapsöl",
      "3 EL Fruchtsaft",
      "70ml Wasser"
    ],
    method: [
      "Die Kartoffeln waschen, schälen und in kleine Stücke schneiden. Zusammen mit den tiefgekühlten Erbsen und etwa 70 ml Wasser in einem kleinen Topf mit geschlossenem Deckel für etwa 10 Minuten leicht kochen lassen.",
      "Die Hirseflocken dazugeben und für weitere 2-3 Minuten garen.",
      "Das Ganze etwas abkühlen lassen und zusammen mit dem Saft und dem Rapsöl fein pürieren."
    ]
  },
  {
    id: 2,
    age: 7,
    type: "Nachmittagsbrei",
    image: "./images/3.jpg",
    name: "Papayabrei für Babys",
    ingredients: [
      "100ml Wasser",
      "20g Hirseflocken",
      "100g Papaya",
      "1TL Rapsöl"
    ],
    method: [
      "Die Hirseflocken zusammen mit dem Wasser aufkochen.",
      "Bei leichter Hitze etwa 1-2 Minuten köcheln lassen.",
      "Die Papaya von den Kernen und der Schale befreien und das Fruchtfleisch würfeln.",
      "Zusammen mit dem Rapsöl und dem Hirsebrei pürieren."
    ]
  },
  {
    id: 3,
    age: 7,
    type: "Abendbrei",
    image: "./images/4.jpg",
    name: "Grießbrei mit Mango",
    ingredients: [
      "200ml Vollmilch",
      "20g Vollkorngrieß (Weizen oder Dinkel)",
      "20g Mango"
    ],
    method: [
      "Die Milch aufkochen lassen.",
      "Den Grieß mit dem Schneebesen einrühren und noch einmal aufkochen lassen",
      "2-3 Minuten ganz leicht weiter kochen lassen",
      "Die Mango schälen und das Fruchtfleisch vom Kern entfernen und zu dem Brei geben"
    ]
  },
  {
    id: 4,
    age: 9,
    type: "Mittagsbrei",
    image: "./images/5.jpg",
    name: "Babybrei mit Spinat und Lachs",
    ingredients: [
      "50g Spinat",
      "50g Zucchini",
      "50g Kartoffeln",
      "30g Lachs",
      "2-3 EL Obstsaft",
      "1 EL Rapsöl"
    ],
    method: [
      "Den Spinat mit 60 ml Wasser in einen kleinen Topf geben. Zugedeckt bei kleiner Hitze aufkochen lassen",
      "Das Gemüse waschen, die Kartoffeln schälen und beides in sehr kleine Stücke schneiden",
      "Beides zusammen zum Spinat geben und etwa 5 Minuten bei kleiner Hitze köcheln lassen.",
      "Den Lachs in kleine Stücke schneiden. Zum Gemüse geben und für weitere 7-10 Minuten köcheln lassen, bis das Gemüse weich ist.",
      "Alles zusammen mit dem Öl und dem Obstsaft pürieren"
    ]
  },

  {
    id: 6,
    age: 5,
    type: "Mittagsbrei",
    image: "./images/6.jpg",
    name: "Vegetarischer Babybrei mit Karotten, Pastinaken und Hirse",
    ingredients: [
      "30g Pastinaken",
      "70g Karotten",
      "50g Kartoffeln",
      "10g Hirseflocken",
      "1 EL Rapsöl",
      "3 EL Fruchtsaft"
    ],
    method: [
      "Das Gemüse und die Kartoffeln waschen, putzen und in kleine Stücke schneiden.",
      "Alles zusammen mit 70 ml Wasser für etwa 10 Minuten leicht kochen.",
      "Die Hirseflocken dazugeben und für weitere 5 Minuten garen.",
      "Das Ganze etwas abkühlen lassen und zusammen mit dem Saft und dem Rapsöl fein pürieren."
    ]
  },
  {
    id: 7,
    age: 5,
    type: "Mittagsbrei",
    image: "./images/7.jpg",
    name: "Babybrei mit Pastinake und Kalbfleisch",
    ingredients: [
      "100g Pastinaken",
      "50g Kartoffel",
      "30g Kalbsfilet",
      "2-3 EL Apfelsaft",
      "1EL Rapsöl"
    ],
    method: [
      "Die Kartoffel und Pastinaken waschen, schälen und in kleine Stücke schneiden.",
      "Das Kalbsfilet ebenfalls kurz abwaschen und klein würfeln.",
      "Alles zusammen mit etwa 60 ml Wasser in einem kleinen Topf zum Kochen bringen, etwa 10-12 Minuten leicht kochen lassen, bis das Gemüse weich ist.",
      "Den Apfelsaft und das Rapsöl dazu geben und mit dem Kochwasser zusammen fein pürieren."
    ]
  },
  {
    id: 8,
    age: 7,
    type: "Mittagsbrei",
    image: "./images/8.jpg",
    name: "Babybrei mit Fenchel, Karotte und Hirse",
    ingredients: [
      "50g Kartoffel",
      "50g Karotten",
      "50g Bio-Fenchel",
      "10g Hirseflocken",
      "3 EL Orangensaft",
      "1 EL Rapsöl"
    ],
    method: [
      "Die Kartoffeln und Karotten waschen, schälen und in kleine Stücke schneiden.",
      "Den Fenchel waschen, putzen und ebenfalls klein schneiden.",
      "Das Gemüse zusammen mit 60-70 ml Wasser in einen kleinen Topf geben und etwa 10 Minuten bei geschlossenem Deckel leicht köcheln lassen bis das Gemüse weich ist.",
      "Nun die Hirseflocken dazu geben, die Herdplatte ausschalten und das Ganze noch einmal etwa 1-2 Minuten leicht weiter kochen lassen.Die Resthitze der Herdplatte reicht dafür in der Regel aus.",
      "Anschließend den Orangensaft und das Rapsöl dazu geben und den Babybrei pürieren."
    ]
  },
  {
    id: 9,
    age: 7,
    type: "Mittagsbrei",
    image: "./images/9.jpg",
    name: "Babybrei mit Brokkoli, Lachs und Nudeln",
    ingredients: [
      "100g Brokkoli",
      "30g Lachsfilet",
      "50g gekochte Vollkornnudeln",
      "1 EL Rapsöl",
      "2-3 EL Fruchsaft"
    ],
    method: [
      "Den Brokkoli waschen, putzen und in kleine Röschen teilen.",
      "Das Lachsfilet ebenfalls kurz abwaschen und in kleine Würfel schneiden.",
      "Brokkoli und Lachs zusammen mit 50-60 ml Wasser in einen kleinen Topf geben und mit geschlossenem Deckel etwa 8-10 Minuten kochen lassen, bis der Brokkoli weich ist.",
      "Dann die gekochten Nudeln dazu geben und noch einmal 1-2 Minuten mitkochen lassen.",
      "Alles zusammen mit dem Rapsöl und dem Saft pürieren."
    ]
  },
  {
    id: 10,
    age: 7,
    type: "Nachmittagsbrei",
    image: "./images/10.jpg",
    name: "Grießbrei für Babys mit Birne und Apfel",
    ingredients: [
      "50g Apfel",
      "50g Birne",
      "20g Vollkorngrieß (z.B. Dinkel oder Weizen)",
      "1 TL Rapsöl"
    ],
    method: [
      "Apfel und Birne waschen, putzen und mit einer Küchenreibe fein reiben.",
      "100 ml Wasser in einem kleinen Topf zum Kochen bringen.",
      "Den Grieß einrühren. Das fein gerieben Obst ebenfalls dazugeben und den Grießbrei noch einmal 1-2 Minuten leicht kochen lassen.",
      "Zum Schluss noch das Rapsöl unterrühren."
    ]
  },
  {
    id: 11,
    age: 7,
    type: "Nachmittagsbrei",
    image: "./images/11.jpg",
    name: "Babybrei mit Apfelmus und Hirse",
    ingredients: [
      "100g Apfelmus",
      "100ml Wasser",
      "20g Hirseflocken",
      "1 TL Rapsöl"
    ],
    method: [
      "Die Hirseflocken mit dem Wasser zusammen in einen kleinen Topf geben und aufkochen lassen.",
      "Die Flocken noch 2-3 Minuten weiter quellen lassen.",
      "Den Hirsebrei mit dem Apfelmus vermischen und das Rapsöl unterrühren."
    ]
  },
  {
    id: 12,
    age: 7,
    type: "Abendbrei",
    image: "./images/12.jpg",
    name: "Grießbrei für Babys mit Heidelbeeren",
    ingredients: ["200ml Vollmilch", "20g Grieß", "2 EL Heidelbeeren"],
    method: [
      "Die Vollmilch in einem kleinen Topf aufkochen und den Grieß einrühren.",
      "Die Heidelbeeren gut waschen und zu dem Grießbrei dazu geben.",
      "Alles zusammen zu einem feinen Babybrei pürieren."
    ]
  },
  {
    id: 13,
    age: 9,
    type: "Abendbrei",
    image: "./images/13.jpg",
    name: "Grießbrei für Babys mit Himbeeren",
    ingredients: ["200ml Vollmilch", "20g Grieß", "7-10 Himbeeren"],
    method: [
      "Die Vollmilch in einem kleinen Topf aufkochen und den Grieß einrühren.",
      "Die Himbeeren gut waschen und zu dem Grießbrei dazugeben.",
      "Alles zusammen fein pürieren oder wenn eurer Baby das schon mag, die Himbeeren einfach nur mit einer Gabel zerdrücken. "
    ]
  },
  {
    id: 14,
    age: 9,
    type: "Abendbrei",
    image: "./images/14.jpg",
    name: "Grießbrei mit Waldfrüchten",
    ingredients: ["200ml Vollmilch", "20g Grieß", "2 EL gefrorene Waldfrüchte"],
    method: [
      "Die Vollmilch in einem kleinen Topf aufkochen und den Grieß einrühren.",
      "Den Grieß mit einem Schneebesen einrühren und noch einmal kurz aufkochen lassen.",
      "Anschließend die Beeren dazu geben und noch etwa 2-3 Minuten ganz leicht weiter köcheln lassen.",
      "Den Grießbrei je nach Alter deines Babys pürieren oder die Beeren einfach mit einer Gabel zerdrücken."
    ]
  },
  {
    id: 15,
    age: 5,
    type: "Abendbrei",
    image: "./images/15.jpg",
    name: "Zwiebackbrei",
    ingredients: ["200ml Vollmilch oder Folgemilch", "3	Zwieback"],
    method: [
      "Der Zwieback wird geraspelt mit der feinen Reibe, sodass es ganz feine Krümmel sind.",
      "Die Folgemilch nach Vorschrift zubereitet und auf die Zwiebackkrümel gegeben.",
      "Dann wird alles umgerührt, ein wenig quellen gelassen, sodass der Brei nicht mehr zu heiß ist."
    ]
  },
  {
    id: 16,
    age: 5,
    type: "Abendbrei",
    image: "./images/16.jpg",
    name: "Abendbrei mit Haferflocken und Dinkelvollkorngrieß",
    ingredients: [
      "230ml Wasser",
      "25g	Haferflocken",
      "20g	Dinkelvollkorngrieß",
      "n.B. Fruchtmus"
    ],
    method: [
      "Haferflocken und den Grieß mahlen.",
      "Wasser aufkochen und die Haferflocken und den Grieß unterrühren. Kurz köcheln lassen",
      "Dazu kann man Fruchtpüree ohne Zucker z. B. Apfel oder Birne servieren."
    ]
  },
  {
    id: 17,
    age: 5,
    type: "Nachmittagsbrei",
    image: "./images/11.jpg",
    name: "Babybrei aus Vollkorngrieß mit Apfelmus",
    ingredients: [
      "100ml Wasser",
      "100g	Apfelmus",
      "20g	Vollkorngrieß",
      "1 TL Rapsöl"
    ],
    method: [
      "Das abgekochte Wasser auf ca. 40-50 Grad abkühlen lassen und die Flocken aufquellen lassen.",
      "Das pürierte Obst und das Rapsöl unterrühren und auf Esstemperatur abkühlen lassen",
      "Vor dem Füttern bitte unbedingt die Temperatur überprüfen."
    ]
  },
  {
    id: 18,
    age: 5,
    type: "Nachmittagsbrei",
    image: "./images/11.jpg",
    name: "Schmelzflockenbrei mit Apfelmus",
    ingredients: [
      "100ml Wasser",
      "2 Äpfel",
      "20g	Schmelzflocken",
      "1 TL Rapsöl"
    ],
    method: [
      "Die Äpfel schälen und klein würfeln. Mit etwas Wasser für ca. 5 Minuten dünsten.",
      "Die Schmelzflocken unterrühren, noch einige Minuten quellen lassen und pürieren.",
      "Vor dem Füttern bitte unbedingt die Temperatur überprüfen."
    ]
  },
  {
    id: 19,
    age: 5,
    type: "Nachmittagsbrei",
    image: "./images/11.jpg",
    name: "Reisflockenbrei mit Apfelmus",
    ingredients: [
      "150ml Wasser",
      "3 TL Apfelmus",
      "20g	Reisflocken",
      "1 TL Rapsöl"
    ],
    method: [
      "Das Wasser zum kochen bringen und auf 50°C abkühlen lassen.",
      "Die Reisflocken unterrühren und Apfelmus dazugeben"
    ]
  },
  {
    id: 20,
    age: 5,
    type: "Nachmittagsbrei",
    image: "./images/10.jpg",
    name: "Reisbrei mit Birne",
    ingredients: [
      "100ml Wasser",
      "20g	Reisflocken",
      "1 TL Rapsöl",
      "100g Birne"
    ],
    method: [
      "Die Birne schälen und klein würfeln. Mit etwas Wasser für ca. 5 Minuten dünsten.",
      "Die Reisflocken unterrühren, noch einige Minuten quellen lassen.",
      "Vor dem Füttern bitte unbedingt die Temperatur überprüfen."
    ]
  }
];

export default Recipes;
