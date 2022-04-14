export const books = [
  {
    id: 1,
    title: "Unlocking Android",
    isbn: "1933988673",
    pageCount: 416,
    publishedDate: { $date: "2009-04-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    shortDescription:
      "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    longDescription:
      "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
    status: "PUBLISH",
    authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    categories: ["Open Source", "Mobile"],
  },
  {
    id: 2,
    title: "Android in Action, Second Edition",
    isbn: "1935182722",
    pageCount: 592,
    publishedDate: { $date: "2011-01-14T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    shortDescription:
      "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    longDescription:
      "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    status: "PUBLISH",
    authors: ["W. Frank Ableson", "Robi Sen"],
    categories: ["Java"],
  },
  {
    id: 3,
    title: "Specification by Example",
    isbn: "1617290084",
    pageCount: 0,
    publishedDate: { $date: "2011-06-03T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    shortDescription: "Specification By Example",
    status: "PUBLISH",
    authors: ["Gojko Adzic"],
    categories: ["Software Engineering"],
  },
  {
    id: 4,
    title: "Flex 3 in Action",
    isbn: "1933988746",
    pageCount: 576,
    publishedDate: { $date: "2009-02-02T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    shortDescription:
      "New web applications require engaging user-friendly interfaces   and the cooler, the better.",
    status: "PUBLISH",
    authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    categories: ["Internet"],
  },
  {
    id: 5,
    title: "Flex 4 in Action",
    isbn: "1935182420",
    pageCount: 600,
    publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
    shortDescription:
      "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it.",
    status: "PUBLISH",
    authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
    categories: ["Internet"],
  },
  {
    id: 6,
    title: "Collective Intelligence in Action",
    isbn: "1933988312",
    pageCount: 425,
    publishedDate: { $date: "2008-10-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
    shortDescription:
      "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.    In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles   the collective intelligence   locked in the data people leave behind as they surf websites, post blogs, and interact with other users.",
    status: "PUBLISH",
    authors: ["Satnam Alag"],
    categories: ["Internet"],
  },
  {
    id: 7,
    title: "Zend Framework in Action",
    isbn: "1933988320",
    pageCount: 432,
    publishedDate: { $date: "2008-12-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
    shortDescription:
      "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
    longDescription:
      "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result.     For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.    Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.  This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.  ",
    status: "PUBLISH",
    authors: ["Rob Allen", "Nick Lo", "Steven Brown"],
    categories: ["Web Development"],
  },
  {
    id: 8,
    title: "Flex on Java",
    isbn: "1933988797",
    pageCount: 265,
    publishedDate: { $date: "2010-10-15T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
    shortDescription:
      "   A beautifully written book that is a must have for every Java Developer.",
    longDescription:
      "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
    status: "PUBLISH",
    authors: ["Bernerd Allmon", "Jeremy Anderson"],
    categories: ["Internet"],
  },
  {
    id: 9,
    title: "Griffon in Action",
    isbn: "1935182234",
    pageCount: 375,
    publishedDate: { $date: "2012-06-04T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
    shortDescription:
      "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
    longDescription:
      "Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development",
    status: "PUBLISH",
    authors: ["Andres Almiray", "Danno Ferrin", "", "James Shingler"],
    categories: ["Java"],
  },
  {
    id: 10,
    title: "OSGi in Depth",
    isbn: "193518217X",
    pageCount: 325,
    publishedDate: { $date: "2011-12-12T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
    shortDescription:
      "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
    longDescription:
      "A good application framework greatly simplifies a developer's task by providing reusable code modules that solve common, tedious, or complex tasks. Writing a great framework requires an extraordinary set of skills-ranging from deep knowledge of a programming language and target platform to a crystal-clear view of the problem space where the applications to be developed using the framework will be used.    OSGi Application Frameworks shows a Java developer how to build frameworks based on the OSGi service platform. OSGi, an emerging Java-based technology for developing modular applications, is a great tool for framework building. A framework itself, OSGi allows the developer to create a more intuitive, modular framework by isolating many of the key challenges the framework developer faces.    This book begins by describing the process, principles, and tools you must master to build a custom application framework. It introduces the fundamental concepts of OSGi, and then shows you how to put OSGi to work building various types of frameworks that solve specific development problems.    OSGi is particularly useful for building frameworks that can be easily extended by developers to create domain-specific applications. This book teaches the developer to break down a problem domain into its abstractions and then use OSGi to create a modular framework solution. Along the way, the developer learns software engineering practices intrinsic to framework building that result in systems with better software qualities, such as flexibility, extensibility, and maintainability.    Author Alexandre Alves guides you through major concepts, such as the definition of programming models and modularization techniques, and complements them with samples that have real applicability using industry-proved technologies, such as Spring-DM and Equinox.",
    status: "PUBLISH",
    authors: ["Alexandre de Castro Alves"],
    categories: ["Java"],
  },
  {
    id: 11,
    title: "Flexible Rails",
    isbn: "1933988509",
    pageCount: 592,
    publishedDate: { $date: "2008-01-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
    shortDescription:
      '"Flexible Rails created a standard to which I hold other technical books. You definitely get your money\'s worth."',
    longDescription:
      "Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they're an amazing combination.    Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.    This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it's an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.    The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!    With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it \"Flex Immersion.\" You absorb the key concepts of Flex as you go through the process of building the application.    You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.    Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.",
    status: "PUBLISH",
    authors: ["Peter Armstrong"],
    categories: ["Web Development"],
  },
  {
    id: 12,
    title: "Hello! Flex 4",
    isbn: "1933988762",
    pageCount: 258,
    publishedDate: { $date: "2009-11-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
    shortDescription:
      "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr.",
    longDescription:
      "With Flex 4 you can easily add color and life to your web applications by introducing dynamic user features, slick transitions, and eye-catching animations. Flex also provides powerful data handling capabilities so you can build industrial-strength applications. And it's open source, so you can get started without forking over a lot of your hard-earned cash.    We think it should be just as much fun to learn Flex as it is to use Flex. Hello! Flex 4 shows you everything you need to know to get started with Flex 4 without bogging you down in obscure detail or academic edge cases. In this entertaining, hands-on book, you'll quickly move from Hello World into the techniques you'll need to use Flex effectively.    You'll start by progressing through 26 self-contained workshop items, which include everything from small one-page examples, to a 3D rotating haiku, to building a Connect Four game. Finally, in the last chapter you'll build a full Flex application called 'SocialStalkr': an interesting mashup of Twitter and Yahoo Maps that lets you 'stalk' your friends by showing specially formatted Twitter tweets on a Yahoo map.",
    status: "PUBLISH",
    authors: ["Peter Armstrong"],
    categories: ["Internet"],
  },
  {
    id: 13,
    title: "Coffeehouse",
    isbn: "1884777384",
    pageCount: 316,
    publishedDate: { $date: "1997-07-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
    shortDescription:
      "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
    longDescription:
      "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web. The purpose is to capture the zeitgeist of the web's creative community, and to give readers a chance to enjoy some of the best and most notable original works that have appeared in this form.",
    status: "PUBLISH",
    authors: ["Levi Asher", "Christian Crumlish"],
    categories: ["Miscellaneous"],
  },
  {
    id: 14,
    title: "Team Foundation Server 2008 in Action",
    isbn: "1933988592",
    pageCount: 344,
    publishedDate: { $date: "2008-12-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
    shortDescription:
      "In complex software projects, managing the development process can be as critical to success as writing the code itself. A project may involve dozens of developers, managers, architects, testers, and customers, hundreds of builds, and thousands of opportunities to get off-track. To keep tabs on the people, tasks, and components of a medium- to large-scale project, most teams use a development system that allows for easy monitoring, follow-up, and accountability.",
    status: "PUBLISH",
    authors: ["Jamil Azher"],
    categories: ["Microsoft .NET"],
  },
  {
    id: 15,
    title: "Brownfield Application Development in .NET",
    isbn: "1933988711",
    pageCount: 550,
    publishedDate: { $date: "2010-04-16T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
    shortDescription:
      "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
    longDescription:
      "It's easy to get excited about building a new software project from scratch. So-called \"greenfield\" projects often involve learning new technology and the opportunity for experimentation. Working on established software projects may seem less glamorous.    Most software developers have inherited a monolithic application where the day-to-day tasks involve maintenance, incremental improvements, or even cleaning up the mess another programmer left behind. These legacy or brownfield projects often have tightly coupled components, low cohesion, and poor separation of concerns, making them fragile and resistant to change.    Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.    Starting with the build process and the introduction of unit tests, the authors show you how to set up the application so that in later chapters, you can make incremental changes aimed at decoupling components from each other. Each practice introduced will increase your confidence and ability to make subsequent changes to your code.    As the book proceeds, the authors introduce frameworks and tools commonly used today while still approaching the subject from a conceptual level so that you can substitute alternate tools as appropriate. This book examines the reasons why a tool is necessary, not the tool itself. Because the book is based on the authors' experiences, Brownfield Application Development in .Net moves beyond the theories and shows you the techniques you need to be successful.",
    status: "PUBLISH",
    authors: ["Kyle Baley", "Donald Belcham"],
    categories: ["Microsoft"],
  },
  {
    id: 16,
    title: "MongoDB in Action",
    isbn: "1935182870",
    pageCount: 0,
    publishedDate: { $date: "2011-12-12T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
    shortDescription:
      "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
    longDescription:
      "MongoDB is a document-oriented database that's highly scalable and delivers very high-performance, especially with massive data sets that need to be spread across multiple servers. It blends the things you expect with any database   like indexing, querying, and high availability   with powerful new features like easy horizontal scaling (\"auto-sharding\"), map/reduce aggregation, and a flexible document data model to support dynamic schemas.    MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.    Along the way, all of MongoDB's major features are covered, including:        * Indexes and explain plans for efficient queries      * Atomic operations for managing simple data structures and manipulating complex, rich documents      * GridFS for storing and managing large binary objects (images, videos, etc.) in MongoDB      * Map-reduce for custom aggregations and reporting      * Master-slave replication and replica sets for automated failover      * Auto-sharding for automated horizontal scaling    The handy reference section on schema design patterns will help ease the transition from the relational data model of SQL to MongoDB's document-based data model. The numerous, detailed examples are implemented in Ruby and include comprehensive explanations.    MongoDB has been gaining traction in the developer community for its speed, flexibility, scalability, and ease of use. With production deployments that include SourceForge, Foursquare, and Shutterfly, MongoDB is proving to be a robust and reliable database system that keeps developers happy. Covering everything from installation to application design to deployment, MongoDB In Action is written for the application developer who wants to take advantage of MongoDB and get up and running quickly.",
    status: "PUBLISH",
    authors: ["Kyle Banker"],
    categories: ["Next Generation Databases"],
  },
  {
    id: 17,
    title: "Hibernate in Action",
    isbn: "193239415X",
    pageCount: 400,
    publishedDate: { $date: "2004-08-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
    shortDescription: '"2005 Best Java Book!" -- Java Developer\'s Journal',
    longDescription:
      "Hibernate practically exploded on the Java scene. Why is this open-source tool so popular  Because it automates a tedious task: persisting your Java objects to a relational database. The inevitable mismatch between your object-oriented code and the relational database requires you to write code that maps one to the other. This code is often complex, tedious and costly to develop. Hibernate does the mapping for you.    Not only that, Hibernate makes it easy. Positioned as a layer between your application and your database, Hibernate takes care of loading and saving of objects. Hibernate applications are cheaper, more portable, and more resilient to change. And they perform better than anything you are likely to develop yourself.    Hibernate in Action carefully explains the concepts you need, then gets you going. It builds on a single example to show you how to use Hibernate in practice, how to deal with concurrency and transactions, how to efficiently retrieve objects and use caching.    The authors created Hibernate and they field questions from the Hibernate community every day - they know how to make Hibernate sing. Knowledge and insight seep out of every pore of this book.",
    status: "PUBLISH",
    authors: ["Christian Bauer", "Gavin King"],
    categories: ["Java"],
  },
  {
    id: 18,
    title: "Hibernate Search in Action",
    isbn: "1933988649",
    pageCount: 488,
    publishedDate: { $date: "2008-12-21T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
    shortDescription:
      '"A great resource for true database independent full text search." --Aaron Walker, base2Services',
    longDescription:
      "Good search capability is one of the primary demands of a business application. Engines like Lucene provide a great starting point, but with complex applications it can be tricky to implement. It's tough to keep the index up to date, deal with the mismatch between the index structure and the domain model, handle querying conflicts, and so on.    Hibernate Search is an enterprise search tool based on Hibernate Core and Apache Lucene. It provides full text search capabilities for Hibernate-based applications without the infrastructural code required by other search engines. With this free, open-source technology, you can quickly add high-powered search features in an intelligent, maintainable way.    Hibernate Search in Action is a practical, example-oriented guide for Java developers with some background in Hibernate Core. As the first book to cover Hibernate Search, it guides you through every step to set up full text search functionality in your Java applications. The book also introduces core search techniques and reviews the relevant parts of Lucene, in particular the query capabilities.    Hibernate Search in Action also provides a pragmatic, how-to exploration of more advanced topics such as Search clustering. For anyone using Hibernate or JBoss Seam, this book is the definitive guide on how to add or enhance search features in their applications.",
    status: "PUBLISH",
    authors: ["Emmanuel Bernard", "John Griffin"],
    categories: ["Java"],
  },
  {
    id: 19,
    title: "ASP.NET 4.0 in Practice",
    isbn: "1935182463",
    pageCount: 504,
    publishedDate: { $date: "2011-05-15T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bochicchio.jpg",
    shortDescription:
      "ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews.",
    longDescription:
      "ASP.NET is an established technology to build web applications using Microsoft products. It drives a number of enterprise-level web sites around the world, but it can be scaled for projects of any size. The new version 4.0 is an evolutionary step: you will find a lot of new features that you will be able to leverage to build better web applications with minimal effort.    ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews. Using a practical Problem-Solution-Discussion format, it will guide you through the most common scenarios you will face in a typical ASP.NET application, and provide solutions and suggestions to take your applications to another level.",
    status: "PUBLISH",
    authors: ["Daniele Bochicchio", "Stefano Mostarda", "", "Marco De Sanctis"],
    categories: ["Microsoft .NET"],
  },
  {
    id: 20,
    title: "Mobile Agents",
    isbn: "1884777368",
    pageCount: 320,
    publishedDate: { $date: "1997-03-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg",
    shortDescription:
      "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet.",
    longDescription:
      "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet. The book presents the reality of today's agent technologies and the future that this technology promises. It teaches how to create and deploy the major mobile agent systems (Telescript, Agent Tcl, Ara, Aglets Workbench) and how to solve a variety of problems on the Internet. Each of the chapters was written in collaboration with the original developers of the agent systems.",
    status: "PUBLISH",
    authors: ["William R. Cockayne and Michael Zyda", "editors"],
    categories: ["Internet"],
  },
  {
    id: 21,
    title: "Portlets and Apache Portals",
    pageCount: 500,
    publishedDate: { $date: "2005-10-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hepper.jpg",
    shortDescription:
      'Portlets and Apache Portals was not published by Manning, but the manuscript is available for download from our website "as is."',
    longDescription:
      'Due to the growing complexity of web sites, portals and portlets are experiencing serious growth. Portals help reduce complexity by allowing the dynamic aggregation and display of diverse content in a single web page. Portal components are pluggable parts called portlets. To be "pluggable" portlets and portals must satisfy standards. The authors of this book, all but one employees of IBM, created these standards: Java Portlet Specification JSR 168 and Web Services for Remote Portlets (WSRP).    The book starts gently with the basics of portlet technology and a functionrich portlet example. It then dives more deeply into portlets and J2EE, portlet architecture, best practices, and explores how the popular JSF web framework can ease portlet development. It shows how to set up an open source portal and create portlets that dynamically access backend data of various types. It is rich in something readers want: code examples that show them how to do it.',
    status: "PUBLISH",
    authors: [
      "Stefan Hepper",
      "Peter Fischer",
      "Stephan Hesmer",
      "Richard Jacob",
      "David Sean Taylor",
    ],
    categories: ["Java"],
  },

  {
    id: 22,
    title: "Java 2 Micro Edition",
    isbn: "1930110332",
    pageCount: 504,
    publishedDate: { $date: "2002-03-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/white.jpg",
    longDescription:
      "Java2, Micro Edition (J2ME) is a technology defined by many specifications. Tutorial and API example application source code downloads will be available from this site.",
    status: "PUBLISH",
    authors: ["James P. White", "David A. Hemphill"],
    categories: ["Java", "Internet"],
  },

  {
    id: 23,
    title: "Spring in Practice",
    isbn: "1935182056",
    pageCount: 600,
    publishedDate: { $date: "2013-05-09T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wheeler.jpg",
    shortDescription:
      "Spring in Practice diverges from other cookbooks because it presents the background you need to understand the domain in which a solution applies before it offers the specific steps to solve the problem. You're never left with the feeling that you understand the answer, but find the question irrelevant. You can put the book to immediate use even if you don't have deep knowledge of every part of Spring Framework.",
    longDescription:
      "For enterprise Java developers, Spring Framework provides remarkable improvements in developer productivity, runtime performance, and overall application quality. Its unique blend of a complete, lightweight container that allows you to build a complex application from loosely-coupled POJOs and a set of easily understood abstractions that simplify construction, testing, and deployment make Spring both powerful and easy-to-use   a hard-to-beat combination. With this power comes the potential for a wide range of uses in both common and not-so-common scenarios. That's where Spring in Practice comes in.    Unlike the many books that teach you what Spring is, Spring in Practice shows you how to tackle the challenges you face when you build Spring-based applications. The book empowers software developers to solve concrete business problems \"the Spring way\" by mapping application-level issues to Spring-centric solutions.    Spring in Practice diverges from other cookbooks because it presents the background you need to understand the domain in which a solution applies before it offers the specific steps to solve the problem. You're never left with the feeling that you understand the answer, but find the question irrelevant. You can put the book to immediate use even if you don't have deep knowledge of every part of Spring Framework.    The book divides into three main parts. In Part 1, you'll get a rapid overview of Spring Framework   enough to get you started if you're new and a great refresher for readers who already have a few Spring cycles. Part 2 provides techniques that are likely to be useful no matter what type of application you're building. You'll find discussions of topics like user accounts, security, site navigation, and application diagnosis.    Part 3 provides domain-specific recipes. Here, you'll find practical solutions to realistic and interesting business problems. For example, this part discusses Spring-based approaches for ecommerce, lead generation, and CRM.    There are several recurring themes throughout Spring in Practice, including Spring MVC, Hibernate, and transactions. Each recipe is an opportunity to highlight something new or interesting about Spring, and to focus on that concept in detail.    This book assumes you have a good foundation in Java and Java EE. Prior exposure to Spring Framework is helpful, but not required.",
    status: "PUBLISH",
    authors: ["Willie Wheeler with Joshua White"],
    categories: ["Java", "Software Development"],
  },

  {
    id: 24,
    title: "Spring in Action, Third Edition",
    isbn: "1935182358",
    pageCount: 424,
    publishedDate: { $date: "2011-06-21T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls4.jpg",
    shortDescription:
      "Spring in Action, Third Edition has been completely revised to reflect the latest features, tools, practices Spring offers to java developers. It begins by introducing the core concepts of Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications.",
    longDescription:
      "A few years back, Spring arrived as is a fresh breeze blowing over the Java landscape. Based on the principles of dependency injection, interface-oriented design, and aspect-oriented programming, Spring combines enterprise application power with the simplicity of plain-old Java objects (POJOs). Now, Spring has grown into a full suite of technologies, including dedicated projects for integration, OSGI-based development, and more.    Spring in Action, Third Edition has been completely revised to reflect the latest features, tools, practices Spring offers to java developers. It begins by introducing the core concepts of Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications.    Inside, you'll see how to:    Solve persistence problems  Handle asynchronous messaging  Create and consume remote services  Build web applications  Integrate with most popular web frameworks  In short, you'll learn how to use Spring to write simpler, easier to maintain code so that you can focus on what really matters   your critical business needs.    The revised Third Edition explores the core Spring Framework issues, as well as the latest updates to other Spring portfolio projects such as Spring WebFlow and Spring Security. The result is a book that's both broader and deeper than previous editions. You'll learn the full range of new features available with Spring 3, including:    More annotation-oriented options to reduce the amount of XML configuration  Full-featured support for REST  A new Spring Expression Language (SpEL) that makes short work of wiring complex values.  Examples that illustrate the current best practices developed in the Spring community.  This book assumes that you know your way around Java, but no previous experience with Spring is required.",
    status: "PUBLISH",
    authors: ["Craig Walls"],
    categories: ["Java"],
  },

  {
    id: 25,
    title: "Spring in Action",
    isbn: "1932394354",
    pageCount: 472,
    publishedDate: { $date: "2005-02-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls2.jpg",
    shortDescription:
      "Spring in Action introduces you to the ideas behind Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications. You will see how to solve persistence problems using the leading open-source tools, and also how to integrate your application with the most popular web frameworks. You will learn how to use Spring to manage the bulk of your infrastructure code so you can focus on what really matters     your critical business needs.",
    longDescription:
      "Spring is a fresh breeze blowing over the Java landscape. Based on a design principle called Inversion of Control, Spring is a powerful but lightweight J2EE framework that does not require the use of EJBs. Spring greatly reduces the complexity of using interfaces, and speeds and simplifies your application development. You get the power and robust features of EJB and get to keep the simplicity of the non-enterprise JavaBean.    Spring in Action introduces you to the ideas behind Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications. You will see how to solve persistence problems using the leading open-source tools, and also how to integrate your application with the most popular web frameworks. You will learn how to use Spring to manage the bulk of your infrastructure code so you can focus on what really matters     your critical business needs.",
    status: "PUBLISH",
    authors: ["Craig Walls", "Ryan Breidenbach"],
    categories: ["Java"],
  },
  {
    id: 26,
    title: "Ten Years of UserFriendly.Org",
    isbn: "1935182129",
    pageCount: 1096,
    publishedDate: { $date: "2008-12-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/userfriendly.jpg",
    shortDescription:
      "This unique collector's volume includes every daily strip from November 17, 1997 to November 16, 2007. Many of the cartoons are annotated with comments from UserFriendly artist and creator JD    Illiad    Frazer.",
    longDescription:
      "For over 10 years, UserFriendly has been entertaining geeks of all stripes with its daily dose of humor, social commentary, and occasionally absurd observations about the world of technology. Loyal UserFriendly fans   UFies   have been asking for a Big Book of UserFriendly that assembles the first decade of UserFriendly   almost 4,000 individual comics   in a single volume. Manning has teamed up with the folks at UserFriendly.Org to bring you exactly that!    This unique collector's volume includes every daily strip from November 17, 1997 to November 16, 2007. Many of the cartoons are annotated with comments from UserFriendly artist and creator JD    Illiad    Frazer.",
    status: "PUBLISH",
    authors: ['JD "Illiad" Frazer'],
    categories: ["Miscellaneous"],
  },
  {
    id: 27,
    title: "iPhone and iPad in Action",
    isbn: "1935182587",
    pageCount: 450,
    publishedDate: { $date: "2010-08-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/trebitowski.jpg",
    shortDescription:
      "Using many examples, the book covers core features like accelerometers, GPS, the Address Book, and much more. Along the way, you'll learn to leverage your iPhone skills to build attractive iPad apps. This is a revised and expanded edition of the original iPhone in Action.",
    longDescription:
      "This hands-on tutorial will help you master iPhone/iPad development using the native iPhone SDK. It guides you from setting up dev tools like Xcode and Interface Builder, through coding your first app, all the way to selling in the App Store.    Using many examples, the book covers core features like accelerometers, GPS, the Address Book, and much more. Along the way, you'll learn to leverage your iPhone skills to build attractive iPad apps. This is a revised and expanded edition of the original iPhone in Action.",
    status: "PUBLISH",
    authors: [
      "Brandon Trebitowski",
      "Christopher Allen",
      "",
      "Shannon Appelcline",
    ],
    categories: ["Mobile Technology"],
  },
  {
    id: 28,
    title: "Bitter EJB",
    isbn: "1930110952",
    pageCount: 440,
    publishedDate: { $date: "2003-05-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate2.jpg",
    shortDescription:
      "\"The book's informal tone offers a refreshing change from the ubiquitous preachiness of other EJB tomes. It's pragmatic and doesn't tap dance around the fact that EJBs are often used incorrectly in enterprise development... it's an effective way to avoid the potholes that have forced developers off track in the past.\" -- Software Development Magazine",
    longDescription:
      "In Bitter EJB, Bruce Tate and his co-authors continue the entertaining and engaging writing style of relating true-life adventure sport experiences to antipattern themes established in Bruce's first book, the best selling Bitter Java.    This more advanced book explores antipatterns, or common traps, within the context of EJB technology.    EJB is experiencing the mixture of practical success and controversy that accompanies a new and quickly-changing framework. Bitter EJB takes the swirling EJB controversies head-on. It offers a practical approach to design: how to become a better programmer by studying problems and solutions to the most important problems surrounding the technology.    The flip side of design patterns, antipatterns, are a fun and interesting way to take EJB expertise to the next level. The book covers many different aspects of EJB, from transactions to persistence to messaging, as well as performance and testing.    Bitter EJB will teach programmers to do the following:    Identify EJB persistence strategies  Choose Entity bean alternatives  Use EJB message driven beans  Know when to apply or avoid stateful session beans  Create efficient build strategies with XDoclet, Ant and JUnit  Automate performance tuning",
    status: "PUBLISH",
    authors: ["Bruce Tate", "Mike Clark", "Bob Lee", "Patrick Linskey"],
    categories: ["Java", "Internet"],
  },
  {
    id: 29,
    title: "JUnit in Action, Second Edition",
    isbn: "1935182021",
    pageCount: 504,
    publishedDate: { $date: "2010-07-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tahchiev.jpg",
    shortDescription:
      "JUnit in Action, Second Edition is an up-to-date guide to unit testing Java applications (including Java EE applications) using the JUnit framework and its extensions. This book provides techniques for solving real-world problems such as testing AJAX applications, using mocks to achieve testing isolation, in-container testing for Java EE and database applications, and test automation.",
    longDescription:
      "When JUnit was first introduced a decade ago by Kent Beck and Erich Gamma, the Agile movement was in its infancy, \"Test Driven Development\" was unknown, and unit testing was just starting to move into the typical developer's vocabulary. Today, most developers acknowledge the benefits of unit testing and rely on the increasingly sophisticated tools now available. The recently released JUnit 4.5 represents the state of the art in unit testing frameworks, and provides significant new features to improve the Java development process.    JUnit in Action, Second Edition is an up-to-date guide to unit testing Java applications (including Java EE applications) using the JUnit framework and its extensions. This book provides techniques for solving real-world problems such as testing AJAX applications, using mocks to achieve testing isolation, in-container testing for Java EE and database applications, and test automation.    Written to help readers exploit JUnit 4.5, the book covers recent innovations such as the new annotations that simplify test writing, improved exception handling, and the new assertion methods. You'll also discover how to use JUnit extensions to test new application styles and frameworks including Ajax, OSGi, and HTML-based presentation layers.    Using a sample-driven approach, various unit testing strategies are covered, such as how to unit test EJBs, database applications, and web applications. Also addressed are testing strategies using freely available open source frameworks and tools, and how to unit test in isolation with Mock Objects. The book will also bring you up to speed on the latest thinking in TDD, BDD, Continuous Integration, and other practices related to unit testing.  ",
    status: "PUBLISH",
    authors: [
      "Petar Tahchiev",
      "Felipe Leme",
      "Vincent Massol",
      "",
      "Gary Gregory",
    ],
    categories: ["Java"],
  },
  {
    id: 30,
    title: "EJB Cookbook",
    isbn: "1930110944",
    pageCount: 352,
    publishedDate: { $date: "2003-05-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins2.jpg",
    shortDescription:
      '"This book provides a great reference for the average EJB developer. It provides recipes for most common tasks that an EJB developer would need." -- Computing Reviews, Nov. 2003',
    longDescription:
      "The EJB Cookbook is a resource for the practicing EJB developer. It is a systematic collection of EJB 'recipes'. Each recipe describes a practical problem and its background; it then shows the code that  solves it, and ends with a detailed discussion.    This unique book is written for developers who want quick, clean, solutions to frequent problems--or simply EJB development ideas. Easy to find recipes range from the common to the advanced. How do you secure a message-driven bean  How do you generate EJB code  How can you improve your entity bean persistence layer ",
    status: "PUBLISH",
    authors: ["Benjamin G. Sullins", "Mark B. Whipple"],
    categories: ["Java"],
  },
  {
    id: 31,
    title: "Scala in Depth",
    isbn: "1935182706",
    pageCount: 0,
    publishedDate: { $date: "2012-05-14T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/suereth.jpg",
    shortDescription:
      "Scala in Depth is a unique new book designed to help you integrate Scala effectively into your development process. By presenting the emerging best practices and designs from the Scala community, it guides you though dozens of powerful techniques example by example. There's no heavy-handed theory here-just lots of crisp, practical guides for coding in Scala.",
    longDescription:
      "Scala is a unique and powerful new programming language for the JVM. Blending the strengths of the Functional and Imperative programming models, Scala is a great tool for building highly concurrent applications without sacrificing the benefits of an OO approach. While information about the Scala language is abundant, skilled practitioners, great examples, and insight into the best practices of the community are harder to find. Scala in Depth bridges that gap, preparing you to adopt Scala successfully for real world projects.    Scala in Depth is a unique new book designed to help you integrate Scala effectively into your development process. By presenting the emerging best practices and designs from the Scala community, it guides you though dozens of powerful techniques example by example. There's no heavy-handed theory here-just lots of crisp, practical guides for coding in Scala.    For example:        * Discover the \"sweet spots\" where object-oriented and functional programming intersect.      * Master advanced OO features of Scala, including type member inheritance, multiple inheritance and composition.      * Employ functional programming concepts like tail recursion, immutability, and monadic operations.      * Learn good Scala style to keep your code concise, expressive and readable.    As you dig into the book, you'll start to appreciate what makes Scala really shine. For instance, the Scala type system is very, very powerful; this book provides use case approaches to manipulating the type system and covers how to use type constraints to enforce design constraints. Java developers love Scala's deep integration with Java and the JVM Ecosystem, and this book shows you how to leverage it effectively and work around the rough spots.",
    status: "PUBLISH",
    authors: ["Joshua D. Suereth"],
    categories: ["Java"],
  },
  {
    id: 32,
    title: "SQL Server DMVs in Action",
    isbn: "1935182730",
    pageCount: 352,
    publishedDate: { $date: "2011-05-09T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stirk.jpg",
    shortDescription:
      "SQL Server DMVs in Action shows you how to obtain, interpret, and act on the information captured by DMVs to keep your system in top shape. The over 100 code examples help you master DMVs and give you an instantly reusable SQL library. You'll also learn to use Dynamic Management Functions (DMFs), which provide further details that enable you to improve your system's performance and health.",
    longDescription:
      "SQL Server DMVs in Action is a practical guide that shows you how to obtain, interpret, and act on the information captured by DMVs to keep your system in top shape. The samples provided in this book will help you master DMVs and also give you a tested, working, and instantly reusable SQL code library.    Every action in SQL Server leaves a set of tiny footprints. SQL Server records that valuable data and makes it visible through Dynamic Management Views, or DMVs. You can use this incredibly detailed information to significantly improve the performance of your queries and better understand what's going on inside your SQL Server system.    SQL Server DMVs in Action shows you how to obtain, interpret, and act on the information captured by DMVs to keep your system in top shape. The over 100 code examples help you master DMVs and give you an instantly reusable SQL library. You'll also learn to use Dynamic Management Functions (DMFs), which provide further details that enable you to improve your system's performance and health.",
    status: "PUBLISH",
    authors: ["Ian W. Stirk"],
    categories: ["Microsoft .NET"],
  },
  {
    id: 33,
    title: "Implementing PeopleSoft Financials",
    isbn: "138411808",
    pageCount: 220,
    publishedDate: { $date: "1997-01-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stephens.jpg",
    shortDescription:
      "Implementing PeopleSoft Financials discusses the issues that arise and the pitfalls to avoid. Every member of the implementation team--from entry-level accounting clerk through MIS staff to executive sponsors--will benefit from reading this book.",
    longDescription:
      "The PeopleSoft promise is enticing: Here's a way for your company to implement a complete and flexible financial infrastructure in a client/server environment without the burdens of low-level programming. But, implementation remains complex and requires reengineering of the business processes and cultures of the using organizations. The author, an experienced implementor of PeopleSoft systems, discusses the issues that arise and the pitfalls to avoid. Every member of the implementation team--from entry-level accounting clerk through MIS staff to executive sponsors--will benefit from reading this book. The views it contains, coming from an independent authority, will also prove useful to those who are considering adopting PeopleSoft for their companies.",
    status: "PUBLISH",
    authors: ["Early Stephens"],
    categories: ["Business", "Client-Server"],
  },
  {
    id: 34,
    title: "Becoming Agile",
    isbn: "1933988258",
    pageCount: 408,
    publishedDate: { $date: "2009-05-01T00:00:00.000-0700" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smith.jpg",
    shortDescription:
      "   Becoming Agile is not another book to be classified in the existing ones handling agile practices, it's one of the rare writings which will go with you in the adoption and setup/migration to an agile process...This real must-have agilist's bedside book reads very well and will accompany you in your migration agile practices...       Eric Siber, Developpez.com",
    longDescription:
      "Agile principles have been a breath of fresh air to many development teams stuck in the middle of a rigid, process-driven environment. Unfortunately, it's not so easy to bring Agile into an existing organization with established people and practices. Becoming Agile shows you practical techniques and strategies to move from your existing process to an Agile process without starting from scratch.    Many books discuss Agile from a theoretical or academic perspective. Becoming Agile takes a different approach and focuses on explaining Agile from a ground-level point-of-view. Author Greg Smith, a certified ScrumMaster with dozens of Agile projects under his belt, presents Agile principles in the context of a case study that flows throughout the book.    Becoming Agile focuses on the importance of adapting Agile principles to the realities of your environment. While Agile purists have often discouraged a    partial-Agile    approach, the reality is that in many shops a    purist    approach simply isn't a viable option. Over the last few years, Agile authorities have begun to discover that the best deployments of Agile are often customized to the specific situation of a given company.  As well, Becoming Agile addresses the cultural realities of deploying Agile and how to deal with the needs of executives, managers, and the development team during migration. The author discusses employee motivation and establishing incentives that reward support of Agile techniques.    Becoming Agile will show you how to create a custom Agile process that supports the realities of your environment. The process will minimize risk as you transition to Agile iteratively, allowing time for your culture and processes to acclimate to Agile principles.",
    status: "PUBLISH",
    authors: ["Greg Smith", "Ahmed Sidky"],
    categories: ["Software Engineering"],
  },
  {
    id: 35,
    title: "Magical A-Life Avatars",
    isbn: "1884777589",
    pageCount: 450,
    publishedDate: { $date: "2000-12-01T00:00:00.000-0800" },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/small.jpg",
    shortDescription:
      '"Distinctive book explaining how to get intelligent software agents to work." --Clipcode.com',
    longDescription:
      "Here's a book guaranteed to inspire your creativity and get you looking at the Internet and the World Wide Web with new eyes. Modeling its vision on evolutionary biology, Magical A-Life Avatars uses the example environment of Macromedia Director to create:    imaginative Intranets  original Internet services and applications  new approaches to e-commerce and distance learning  smart agents and Internet robots  brain-like processing modules for adaptation and learning  novel forms of information processing  Magical A-Life Avatars shows, with practical examples, how to bring intelligence to your Website and create Internet interfaces that will increase your competitive advantage. If you're interested in cutting-edge website design and application, this book is for you.",
    status: "PUBLISH",
    authors: ["Peter Small"],
    categories: ["Internet", "Theory"],
  },
];
