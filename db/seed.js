const { Journal } = require("../models");

Journal.deleteMany({}, function (error, deletedJournals) {
  if (error) {
    return console.log(error);
  }
  Journal.insertMany(
    [
      {
        title: "Journal 1",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: true,
      },
      {
        title: "Journal 2",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: true,
      },
      {
        title: "Journal 3",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: true,
      },
      {
        title: "Journal 4",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: false,
      },
      {
        title: "Journal 5",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: false,
      },
    ],
    function (error, createdJournals) {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seeded Data ===");
      console.log(createdJournals);
    }
  );
});