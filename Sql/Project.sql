--users
create table [Users](
_id int primary key identity(1,1),
Tz varchar(9) not null unique,
[Name] varchar(40) not null,
Email varchar(50) not null unique,
[Password] varchar(15) not null unique,
Phone varchar(20),
[Level] int DEFAULT 0,
BirthDate Date not null,
)
--business [table]
create table [Enterprises](
_id int primary key identity(1,1),
Email varchar(50) not null unique,
Phone varchar(20),
[Name] varchar(40) not null unique,
[Url] varchar(200),
[Password] varchar(15) not null unique,
Active bit DEFAULT 'false',
)
--SendMail
create table [SendMail](
_id int primary key identity(1,1),
GetterId int,
[Status] bit,
[Key] varchar(20) not null, 
SendDate datetime,
)
--Lotery
create table [Lotery](
_id int primary key identity(1,1),
EnterpCardId int foreign key references [dbo].[EnterpCards](_id),
LoteryType varchar(20),
[ExpireDate] Date,
[Sum] int,
SumType varchar(1),
Num1 int,--עבור  פלוס חינם לדוג' 1+1
Num2 int,--עבור  פלוס חינם לדוג' 1+1
Addition varchar(50),--"לתוספת של המנהל לדוג' "על כל הקפואים  
Expiration int ,
[Type] int,
)
--EnterpCards
create table [EnterpCards](
_id int primary key identity(1,1),
Cost money not null,
CountPoints int,
Img nvarchar(max) not null,
EnterpId int foreign key references [Enterprises](_id),
[Type] varchar(20) null,
Payment bit DEFAULT 'false',
Duration int null,
[FileName] varchar(1000),
)
--clubCards
create table [ClubCards](
_id int primary key identity(1,1),
UserId int foreign key references [Users](_id),
EnterpCardId int foreign key references [EnterpCards](_id),
Points int,
BuyDate Date not null,
[ExpireDate] Date not null,
AppLoteryId int foreign key references [Lotery](_id),
[Level] int,
Payment bit DEFAULT 'false',
)
--Buyings
create table [Buyings](
_id int primary key identity(1,1),
ClubCardId int foreign key references [ClubCards](_id),
BuyDate Date not null,
[Sum] money
)
--Contact
create table [Contact](
_id int primary key identity(1,1),
Name varchar(40) not null,
Email varchar(50) not null,
Phone varchar(20) not null,
[Description] varchar(500),
)
