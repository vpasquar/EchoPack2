INSERT INTO `echopack`.`users`
(`id`,
`firstName`,
`lastName`,
`userName`,
`email`,
`password`)
VALUES
(1,
"TestFirst",
"TestLast",
"Test908",
"Test@Test.com",
"testword");

INSERT INTO `echopack`.`boxes`
(`id`,
`title`,
`description`,
`UserId`)
VALUES
(1,
"TestA",
"Test Description",
1);

INSERT INTO `echopack`.`posts`
(`id`,
`title`,
`content`,
`BoxId`,
`UserId`)
VALUES
(1,
"PostA",
"PostA Content",
1,
1);

