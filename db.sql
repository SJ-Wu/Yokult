-- 創建資料庫
CREATE DATABASE `YOKULT`;

USE `YOKULT`;

-- 會員資料
DROP TABLE IF EXISTS `MEMBER`;

CREATE TABLE `MEMBER` (
  `MEMID` VARCHAR(50) NOT NULL COMMENT '會員帳號',
  `EMAIL` VARCHAR(320) NOT NULL COMMENT '會員信箱',
  `PASSWORD` VARCHAR(10) NOT NULL COMMENT '會員密碼',
  `FIRSTNAME` VARCHAR(10) NOT NULL COMMENT '會員姓氏',
  `LASTNAME` VARCHAR(10) NOT NULL COMMENT '會員名字',
  `BIRTH` DATETIME COMMENT '會員生日',
  `CELLPHONE` VARCHAR(10) NOT NULL COMMENT '手機號碼',
  `PHONE` VARCHAR(10) COMMENT '聯絡電話',
  `ADDR` VARCHAR(50) COMMENT '居住地址',
  PRIMARY KEY (`MEMID`))
COMMENT = '會員資料';

INSERT INTO 
  `MEMBER` (`MEMID`, `EMAIL`, `PASSWORD`, `FIRSTNAME`, `LASTNAME`, `BIRTH`, `CELLPHONE`, `PHONE`, `ADDR`)
VALUES
  ('TGA001', 'tga001@gmail.com', '123', '家豪', '李', '2022-04-11', '0910123456', '0234567891', '110台北市信義區市府路45號'),
  ('TGA002', 'tga002@gmail.com', '123', '美玉', '王', '2022-05-01', '0912345678', '0345678901', '407台中市西屯區惠來路二段101號'),
  ('TGA003', 'tga003@gmail.com', '123', '志明', '張', '2022-05-31', '0972345678', '0456789012', '717台南市仁德區文華路二段66號'),
  ('TGA004', 'tga004@gmail.com', '123', '淑華', '劉', '2022-06-05', '0954567890', '0567890123', '803高雄市鹽埕區大勇路1號'),
  ('TGA005', 'tga005@gmail.com', '123', '俊傑', '陳', '2022-08-25', '0987654321', '0678901234', '944屏東縣車城鄉後灣路2號');

-- 訂單資料
DROP TABLE IF EXISTS `ORDER`;

CREATE TABLE `ORDER` (
  `ODRID` VARCHAR(50) NOT NULL COMMENT '訂單編號',
  `FK_ORDER_MEMID` VARCHAR(50) NOT NULL COMMENT '會員帳號',
  `PAYMENTID` INTEGER NOT NULL COMMENT '付款方式ID',
  `ADDR` VARCHAR(50) NOT NULL COMMENT '訂單地址',
  `RECEIPTER` VARCHAR(45) NOT NULL COMMENT '收貨人',
  `SHOPTIME` VARCHAR(45) NOT NULL COMMENT '下單時間',
  `RETURNS` BOOLEAN NULL COMMENT '退換貨',
  `STATUSID` INTEGER NOT NULL COMMENT '訂單狀態ID',
  PRIMARY KEY (`ODRID`),
  CONSTRAINT `FK_ORDER_MEMID`
    FOREIGN KEY (`FK_ORDER_MEMID`)
    REFERENCES `MEMBER` (`MEM_ID`)
    ON UPDATE CASCADE);

INSERT INTO 
  `ORDER` (`ODRID`, `FK_ORDER_MEMID`, `PAYMENTID`, `ADDR`, `RECEIPTER`, `SHOPTIME`, `STATUSID`) 
VALUES 
  ('ODR001', 'TGA001', '0', '231新北市新店區民權路100號', '龍蝦', '2022-05-17 00:00:00', '1'),
  ('ODR002', 'TGA001', '0', '231新北市新店區民權路101號', '蝦蛄', '2022-05-17 01:00:00', '1'),
  ('ODR003', 'TGA001', '0', '231新北市新店區民權路102號', '波士頓龍蝦', '2022-05-17 02:00:00', '1'),
  ('ODR004', 'TGA001', '0', '231新北市新店區民權路103號', '撒尿蝦', '2022-05-17 03:00:00', '1'),
  ('ODR005', 'TGA001', '0', '231新北市新店區民權路104號', '水姑娘', '2022-05-17 04:00:00', '1');