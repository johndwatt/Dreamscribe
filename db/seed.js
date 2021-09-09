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
        userId: "613a5a76c260911757ea2032",
      },
      {
        title: "Journal 2",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: true,
        userId: "613a5a76c260911757ea2032",
      },
      {
        title: "Journal 3",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: true,
        userId: "613a885bd29720c31301d63c",
      },
      {
        title: "Journal 4",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: false,
        userId: "613a885bd29720c31301d63c",
      },
      {
        title: "Journal 5",
        content: "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil corrupti accusantium tenetur veritatis ratione explicabo exercitationem, voluptatem nulla enim dolorem, totam quas accusamus voluptatum placeat pariatur sapiente fuga similique? Deserunt.",
        isPublic: false,
        userId: "613a5a76c260911757ea2032",
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