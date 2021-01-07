alter  procedure selectCardsForUser @id int
as
begin
select cc.[_id] ClubCard,cc.[EnterpCardId],cc.Points,cc.[ExpireDate],cc.AppLoteryId,
ec.[_id] EnterpCard,ec.[Cost],ec.EnterpId,ec.Img,ec.[Type],ec.[Duration],
e._id Enterprise,e.Name,e.Active,e.Url,
l._id LoteryId,l.[EnterpCardId] EnterpCardId,l.[Sum] LoterySum,l.SumType LoterySumType,l.Num1 LoteryNum1,l.Num2 LoteryNum2,l.Addition LoteryAddition,l.[ExpireDate] LoteryExpireDate,l.LoteryType LoteryType,l.Expiration LoteryExperation,l.[Type] LoteryIntType
from
[dbo].[ClubCards]cc inner join
[dbo].[EnterpCards]ec on cc.EnterpCardId=ec._id inner join 
[dbo].[Enterprises]e on ec.EnterpId=e._id inner join
[dbo].[Lotery]l on l.EnterpCardId=ec._id
where @id=cc.[UserId] 
end
exec selectCardsForUser @id=1

------------------
alter procedure selectAllEnterpCards
as
begin
select ec.[Duration],ec.[Cost],ec.[_id] CardId,ec.[CountPoints],ec.[Img],ec.[EnterpId],ec.[Payment],ec.[Type],e.[_id],e.[Name],e.[Url]
from [dbo].[EnterpCards]ec inner join [dbo].[Enterprises]e on ec.[EnterpId]=e.[_id]
end
exec selectAllEnterpCards
------------------------

--ALTER TABLE [EnterpCards]
--ADD [Type] varchar(20)
-------------
--ALTER TABLE [EnterpCards]
--ADD Duration int
-------------
--ALTER TABLE [EnterpCards]
--ADD [FileName] varchar(1000)
-------------
--ALTER TABLE [dbo].[Lotery]
--ADD Expiration int
------------
--ALTER TABLE [dbo].[Lotery]
--ADD [Type] int
-----------
--ALTER TABLE [dbo].[Lotery]
--ADD [ExpireDate] date