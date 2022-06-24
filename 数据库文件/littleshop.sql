/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2022/6/24 10:42:50                           */
/*==============================================================*/


drop table if exists Business;

drop table if exists Commodity;

drop table if exists Customer;

drop table if exists Orders;

drop table if exists Stock;

/*==============================================================*/
/* Table: Business                                              */
/*==============================================================*/
create table Business
(
   Business_name        varchar(20) not null,
   Business_addr        varchar(100) not null,
   Business_info        varchar(1024),
   Business_phone       varchar(20) not null,
   Business_story       varchar(1024),
   primary key (Business_name)
);

/*==============================================================*/
/* Table: Commodity                                             */
/*==============================================================*/
create table Commodity
(
   Commodity_id         int not null,
   Commodity_name       varchar(20) not null,
   Commodity_price      float not null,
   Commodity_num        int not null,
   Commodity_info       varchar(1024),
   Commodity_type       varchar(20) not null,
   Commodity_desc       varchar(1024),
   primary key (Commodity_id)
);

/*==============================================================*/
/* Table: Customer                                              */
/*==============================================================*/
create table Customer
(
   Customer_id          int not null,
   Customer_name        varchar(20) not null,
   Customer_sex         varchar(10),
   Customer_birth       date,
   Customer_phone       varchar(20) not null,
   Customer_wechat      varchar(50),
   Customer_email       varchar(50),
   Customer_addr        varchar(100) not null,
   Customer_bg          longblob,
   Customer_level       int not null,
   Customer_point       int not null,
   Customer_img         longblob,
   Customer_discount    float,
   primary key (Customer_id)
);

/*==============================================================*/
/* Table: Orders                                              */
/*==============================================================*/
create table Orders
(
   Commodity_id         int not null,
   Customer_id          int not null,
   Order_id             int not null,
   Order_createtime     date not null,
   Order_delivertime    date not null,
   Order_commodnum      int not null,
   Order_commodprice    float not null,
   Order_state          varchar(100) not null,
   Order_commodname     varchar(20) not null,
   Order_payway         varchar(20) not null,
   Order_remarks        varchar(1024),
   primary key (Commodity_id, Customer_id)
);

/*==============================================================*/
/* Table: Stock                                                 */
/*==============================================================*/
create table Stock
(
   Commodity_id         int not null,
   Business_name        varchar(20) not null,
   Stock_commid         int not null,
   Stock_commname       varchar(20) not null,
   Stock_commstate      varchar(20) not null,
   Stock_commtype       varchar(20) not null,
   Stock_commnum        int not null,
   primary key (Commodity_id, Business_name)
);

alter table Orders add constraint FK_Order foreign key (Commodity_id)
      references Commodity (Commodity_id) on delete restrict on update restrict;

alter table Orders add constraint FK_Order2 foreign key (Customer_id)
      references Customer (Customer_id) on delete restrict on update restrict;

alter table Stock add constraint FK_Stock foreign key (Commodity_id)
      references Commodity (Commodity_id) on delete restrict on update restrict;

alter table Stock add constraint FK_Stock2 foreign key (Business_name)
      references Business (Business_name) on delete restrict on update restrict;

