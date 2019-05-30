import React, { Component } from 'react';
import {
    Container, Row, Card, CardImg, CardText, CardBody,
    CardTitle, Col, Button
} from 'reactstrap';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "products": [
                {
                    "id": "206ea175-aa06-49af-af13-acebaa2aea65",
                    "name": "Sugar - Invert",
                    "image": "https://loremflickr.com/320/240",
                    "description": "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
                    "pcs": 1
                },
                {
                    "id": "7cb603ba-3b34-40aa-a1d1-8771766a5e70",
                    "name": "Wine - Jackson Triggs Okonagan",
                    "image": "https://loremflickr.com/320/240",
                    "description": "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
                    "pcs": 1
                },
                {
                    "id": "71c93ce9-ffbc-449d-af39-802574554445",
                    "name": "Longos - Lasagna Veg",
                    "image": "https://loremflickr.com/320/240",
                    "description": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
                    "pcs": 0
                },
                {
                    "id": "2caa4b62-67b0-43b4-8724-1e2e8eca36ce",
                    "name": "Wood Chips - Regular",
                    "image": "https://loremflickr.com/320/240",
                    "description": "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
                    "pcs": 1
                },
                {
                    "id": "93fa3077-108d-4053-b19b-612eca402b5e",
                    "name": "Bagel - Everything Presliced",
                    "image": "https://loremflickr.com/320/240",
                    "description": "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat"
                },
                {
                    "id": "a4f6ca6d-f1ba-4f0f-9111-d16cece88d20",
                    "name": "Appetizer - Veg Assortment",
                    "image": "https://loremflickr.com/320/240",
                    "description": "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
                    "pcs": 1
                },
                {
                    "id": "43bafe21-1527-4168-9e39-9409e123ee21",
                    "name": "Wine - Jafflin Bourgongone",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus"
                },
                {
                    "id": "eabfe984-9709-4467-b600-037679154818",
                    "name": "Juice - Lime",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis",
                    "pcs": 2
                },
                {
                    "id": "b695f1ce-d778-4c96-bdfb-60eb00c82b4c",
                    "name": "Island Oasis - Magarita Mix",
                    "image": "https://loremflickr.com/320/240",
                    "description": "varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam"
                },
                {
                    "id": "87467b44-6e68-4390-8354-06fb0d203abd",
                    "name": "Pastry - Key Limepoppy Seed Tea",
                    "image": "https://loremflickr.com/320/240",
                    "description": "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi"
                },
                {
                    "id": "6235b269-3517-4d4d-bb3b-104b96989081",
                    "name": "Wine - Cave Springs Dry Riesling",
                    "image": "https://loremflickr.com/320/240",
                    "description": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi"
                },
                {
                    "id": "a6c3b8e1-0242-45b3-ab0c-c461a5cfc2e0",
                    "name": "Piping Jelly - All Colours",
                    "image": "https://loremflickr.com/320/240",
                    "description": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas"
                },
                {
                    "id": "96841354-eb9a-411e-8511-b02771dec0d4",
                    "name": "Broccoli - Fresh",
                    "image": "https://loremflickr.com/320/240",
                    "description": "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean"
                },
                {
                    "id": "a367bee7-3258-4403-8a59-fb2a56ca4fe6",
                    "name": "Vermacelli - Sprinkles, Assorted",
                    "image": "https://loremflickr.com/320/240",
                    "description": "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus"
                },
                {
                    "id": "a4da81a9-9cac-42b5-8d07-f6dce9a22d9a",
                    "name": "Tomatoes - Hot House",
                    "image": "https://loremflickr.com/320/240",
                    "description": "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum"
                },
                {
                    "id": "5fa9e7d0-68e0-461e-86f3-c86c9a0e2138",
                    "name": "Tart Shells - Sweet, 3",
                    "image": "https://loremflickr.com/320/240",
                    "description": "id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit"
                },
                {
                    "id": "e7b59a16-bb07-4691-84c4-36012a367b2e",
                    "name": "Liners - Baking Cups",
                    "image": "https://loremflickr.com/320/240",
                    "description": "urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius"
                },
                {
                    "id": "e9e567c8-725c-4dd2-a1ac-275a2978b71f",
                    "name": "Napkin - Dinner, White",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nulla integer pede justo lacinia eget tincidunt eget tempus vel"
                },
                {
                    "id": "a837dbb9-44e1-43a9-82dc-848a863668a6",
                    "name": "Sherbet - Raspberry",
                    "image": "https://loremflickr.com/320/240",
                    "description": "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in"
                },
                {
                    "id": "5206eb9c-8d39-4cf2-9c86-d15a4078f8ae",
                    "name": "Butter Sweet",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel"
                },
                {
                    "id": "152356b1-efb9-4bd4-8e9c-a43041a7994b",
                    "name": "Water Chestnut - Canned",
                    "image": "https://loremflickr.com/320/240",
                    "description": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum"
                },
                {
                    "id": "1b8bf890-568d-475a-b389-2564baaa535c",
                    "name": "Wine - Valpolicella Masi",
                    "image": "https://loremflickr.com/320/240",
                    "description": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis"
                },
                {
                    "id": "004f52f6-06e8-4239-9224-68455df1228b",
                    "name": "Beef - Ground, Extra Lean, Fresh",
                    "image": "https://loremflickr.com/320/240",
                    "description": "diam id ornare imperdiet sapien urna pretium nisl ut volutpat"
                },
                {
                    "id": "1ddd5027-97a5-4045-91ae-9a4d50475eb4",
                    "name": "Sping Loaded Cup Dispenser",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam"
                },
                {
                    "id": "a46b3113-2f84-43f0-a51e-0f51e13dfa15",
                    "name": "Longos - Lasagna Beef",
                    "image": "https://loremflickr.com/320/240",
                    "description": "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat"
                },
                {
                    "id": "919dd6cc-b790-42ad-a764-004712251187",
                    "name": "Cardamon Ground",
                    "image": "https://loremflickr.com/320/240",
                    "description": "volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in"
                },
                {
                    "id": "d73329f5-0ad9-41c2-8614-89a46b34bb86",
                    "name": "Compound - Raspberry",
                    "image": "https://loremflickr.com/320/240",
                    "description": "quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero"
                },
                {
                    "id": "52cefc83-d408-4da8-9d48-1878af91b747",
                    "name": "Star Fruit",
                    "image": "https://loremflickr.com/320/240",
                    "description": "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus"
                },
                {
                    "id": "34926030-c8c7-46d7-befa-25da26c60a82",
                    "name": "Veal - Osso Bucco",
                    "image": "https://loremflickr.com/320/240",
                    "description": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede"
                },
                {
                    "id": "9471b78a-e14b-4363-b1af-b89a973163a3",
                    "name": "Bread - Raisin Walnut Oval",
                    "image": "https://loremflickr.com/320/240",
                    "description": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu"
                },
                {
                    "id": "8112c75a-023b-4f3f-ade6-ae6e2deca210",
                    "name": "Fruit Salad Deluxe",
                    "image": "https://loremflickr.com/320/240",
                    "description": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia"
                },
                {
                    "id": "3b363ae6-306f-402c-ba94-1f41370d8a07",
                    "name": "Bag - Bread, White, Plain",
                    "image": "https://loremflickr.com/320/240",
                    "description": "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui"
                },
                {
                    "id": "6cb6401b-d0e6-4070-8554-c0945e3a2539",
                    "name": "Fiddlehead - Frozen",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id"
                },
                {
                    "id": "2a5696d7-b380-4d16-81c1-185b1999ab89",
                    "name": "Teriyaki Sauce",
                    "image": "https://loremflickr.com/320/240",
                    "description": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec"
                },
                {
                    "id": "7f394a55-73fa-4b43-945b-e1dad18202cf",
                    "name": "Carbonated Water - Strawberry",
                    "image": "https://loremflickr.com/320/240",
                    "description": "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac"
                },
                {
                    "id": "05b26b6e-adfa-4486-8c48-54a77d895e05",
                    "name": "Onions - White",
                    "image": "https://loremflickr.com/320/240",
                    "description": "amet cursus id turpis integer aliquet massa id lobortis convallis tortor"
                },
                {
                    "id": "22740c3a-a178-4275-8c6b-f1b3c2694898",
                    "name": "Salt - Sea",
                    "image": "https://loremflickr.com/320/240",
                    "description": "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum"
                },
                {
                    "id": "5e34ad5e-9a43-4cef-abf1-8b70ccd6baaa",
                    "name": "Wine - Jafflin Bourgongone",
                    "image": "https://loremflickr.com/320/240",
                    "description": "a nibh in quis justo maecenas rhoncus aliquam lacus morbi"
                },
                {
                    "id": "095750e5-5850-4c6e-b260-22c53a0ef288",
                    "name": "Truffle - Peelings",
                    "image": "https://loremflickr.com/320/240",
                    "description": "lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl"
                },
                {
                    "id": "7d54e33f-88db-4b2b-8a2c-1ed177a726dd",
                    "name": "Shichimi Togarashi Peppeers",
                    "image": "https://loremflickr.com/320/240",
                    "description": "posuere metus vitae ipsum aliquam non mauris morbi non lectus"
                },
                {
                    "id": "d056ae8f-9c06-49c1-923e-04545ff8c3cb",
                    "name": "Beans - Soya Bean",
                    "image": "https://loremflickr.com/320/240",
                    "description": "egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies"
                },
                {
                    "id": "42b88b8f-272f-41d4-8ae8-bbb65ab0a22d",
                    "name": "Appetizer - Tarragon Chicken",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum"
                },
                {
                    "id": "13e4400f-9b68-41df-9dfc-5938bfb9b76b",
                    "name": "Soup - Base Broth Chix",
                    "image": "https://loremflickr.com/320/240",
                    "description": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non"
                },
                {
                    "id": "b8adb537-f0cd-4fa7-9f26-377bac3e9258",
                    "name": "Soup - Cream Of Broccoli",
                    "image": "https://loremflickr.com/320/240",
                    "description": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna"
                },
                {
                    "id": "417b8ab4-4bf4-4f62-9c3b-73c873330233",
                    "name": "Cup - 8oz Coffee Perforated",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac"
                },
                {
                    "id": "6d6f8219-44b5-443e-bedb-ddf1b1a40b17",
                    "name": "Wine - Jaboulet Cotes Du Rhone",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem"
                },
                {
                    "id": "a814234c-ed51-4781-842e-9f6ada09de7d",
                    "name": "Chinese Foods - Chicken Wing",
                    "image": "https://loremflickr.com/320/240",
                    "description": "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate"
                },
                {
                    "id": "fce9afcc-d3d3-4f17-849e-015d13ae3de7",
                    "name": "Muffin - Blueberry Individual",
                    "image": "https://loremflickr.com/320/240",
                    "description": "id lobortis convallis tortor risus dapibus augue vel accumsan tellus"
                },
                {
                    "id": "442ba1ef-57ea-44b0-871d-ee337c71f208",
                    "name": "Corn Syrup",
                    "image": "https://loremflickr.com/320/240",
                    "description": "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo"
                },
                {
                    "id": "9737788a-0b77-4510-a931-30a9bf4d880d",
                    "name": "Aspic - Clear",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent"
                },
                {
                    "id": "3667a4f0-0079-4396-b045-ddb739a21b85",
                    "name": "Cinnamon - Ground",
                    "image": "https://loremflickr.com/320/240",
                    "description": "vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus"
                },
                {
                    "id": "d232d71e-dc80-405b-ab07-5645c01e9703",
                    "name": "Mcguinness - Blue Curacao",
                    "image": "https://loremflickr.com/320/240",
                    "description": "consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim"
                },
                {
                    "id": "ca5cccdf-07bd-4a9b-8f23-61530606939e",
                    "name": "Cookies - Assorted",
                    "image": "https://loremflickr.com/320/240",
                    "description": "odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est"
                },
                {
                    "id": "9c39c790-c91d-4f68-8fec-11f03a8ffbe9",
                    "name": "Anchovy Fillets",
                    "image": "https://loremflickr.com/320/240",
                    "description": "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget"
                },
                {
                    "id": "f49124e4-e6c6-4192-aa9e-e6d4ed9e040f",
                    "name": "Straws - Cocktale",
                    "image": "https://loremflickr.com/320/240",
                    "description": "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus"
                },
                {
                    "id": "6a14480c-5140-4a2d-9f88-9878637a6dd2",
                    "name": "Broom - Angled",
                    "image": "https://loremflickr.com/320/240",
                    "description": "pretium quis lectus suspendisse potenti in eleifend quam a odio"
                },
                {
                    "id": "db272548-8360-4ceb-9883-9cc89dd02f4b",
                    "name": "Veal - Shank, Pieces",
                    "image": "https://loremflickr.com/320/240",
                    "description": "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet"
                },
                {
                    "id": "901a84e2-5746-48f1-9395-44d36414fa7d",
                    "name": "Sprouts - Corn",
                    "image": "https://loremflickr.com/320/240",
                    "description": "in consequat ut nulla sed accumsan felis ut at dolor quis"
                },
                {
                    "id": "b796ba21-df66-490f-be44-871923365075",
                    "name": "Mcguinness - Blue Curacao",
                    "image": "https://loremflickr.com/320/240",
                    "description": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend"
                },
                {
                    "id": "1f1d875e-8fb4-45b0-96d5-5185ea884544",
                    "name": "Hog / Sausage Casing - Pork",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel"
                },
                {
                    "id": "97bbaee9-5ded-4d77-a338-8fd21e2019f0",
                    "name": "Muffin - Zero Transfat",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed"
                },
                {
                    "id": "e4c30157-6458-4727-a35b-832ca32c4815",
                    "name": "Cheese - Shred Cheddar / Mozza",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin"
                },
                {
                    "id": "fc8e6ea4-8cb5-40b6-bfdc-44eb490302a5",
                    "name": "Milk - Chocolate 250 Ml",
                    "image": "https://loremflickr.com/320/240",
                    "description": "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus"
                },
                {
                    "id": "df6c1a9a-76bc-45db-885b-6ed65b731ccc",
                    "name": "Alize Sunset",
                    "image": "https://loremflickr.com/320/240",
                    "description": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis"
                },
                {
                    "id": "1dbbf6ec-5ef1-41a1-a391-7eb97c079ec1",
                    "name": "Pepper - Paprika, Spanish",
                    "image": "https://loremflickr.com/320/240",
                    "description": "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu"
                },
                {
                    "id": "aa146d9d-7ed4-45e1-9a82-dc0781e57880",
                    "name": "Bread Base - Toscano",
                    "image": "https://loremflickr.com/320/240",
                    "description": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue"
                },
                {
                    "id": "f60b6b63-40f9-4111-9ce0-812115a6f4af",
                    "name": "Lettuce - Radicchio",
                    "image": "https://loremflickr.com/320/240",
                    "description": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum"
                },
                {
                    "id": "88e88e72-f92f-4d00-a626-07ccc5e38fdb",
                    "name": "Mix - Cappucino Cocktail",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan"
                },
                {
                    "id": "534f48fc-811f-40f3-b946-b9008024960d",
                    "name": "Cabbage Roll",
                    "image": "https://loremflickr.com/320/240",
                    "description": "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum"
                },
                {
                    "id": "6029247e-01ff-482c-9d1f-de9a834094e2",
                    "name": "Beef - Short Ribs",
                    "image": "https://loremflickr.com/320/240",
                    "description": "orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi"
                },
                {
                    "id": "a7eb972d-c3c4-4f36-b118-076f08d0d413",
                    "name": "Southern Comfort",
                    "image": "https://loremflickr.com/320/240",
                    "description": "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis"
                },
                {
                    "id": "ea1ab85f-2045-443b-90ef-607c718bb0f4",
                    "name": "Nutmeg - Ground",
                    "image": "https://loremflickr.com/320/240",
                    "description": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in"
                },
                {
                    "id": "7216508c-1412-42e2-9d59-0759aadbf6e2",
                    "name": "Cheese - Taleggio D.o.p.",
                    "image": "https://loremflickr.com/320/240",
                    "description": "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis"
                },
                {
                    "id": "017f5d39-bfb0-4686-916d-0f6c2748cc42",
                    "name": "Sobe - Lizard Fuel",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ut blandit non interdum in ante vestibulum ante ipsum primis"
                },
                {
                    "id": "88aafd87-667c-4871-b50a-4becf48d4430",
                    "name": "Jam - Blackberry, 20 Ml Jar",
                    "image": "https://loremflickr.com/320/240",
                    "description": "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna"
                },
                {
                    "id": "571b8479-e65e-4255-9bcd-80c0f8b48009",
                    "name": "Pepper - Cubanelle",
                    "image": "https://loremflickr.com/320/240",
                    "description": "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et"
                },
                {
                    "id": "db83d7fa-4547-4edd-a8d4-841ae068a294",
                    "name": "Pepper - Green Thai",
                    "image": "https://loremflickr.com/320/240",
                    "description": "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante"
                },
                {
                    "id": "6cc3f4e2-3c2a-4613-8126-c0c4469cfde1",
                    "name": "Veal - Striploin",
                    "image": "https://loremflickr.com/320/240",
                    "description": "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus"
                },
                {
                    "id": "9e35528b-7844-4c5a-9acd-0504cf230c05",
                    "name": "Wine - White, French Cross",
                    "image": "https://loremflickr.com/320/240",
                    "description": "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi"
                },
                {
                    "id": "c734f233-69a5-4f17-aa24-99f5d51316a9",
                    "name": "Bagel - 12 Grain Preslice",
                    "image": "https://loremflickr.com/320/240",
                    "description": "mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede"
                },
                {
                    "id": "796ebfd9-a141-4ae1-b8b8-4fd62a8ce8f8",
                    "name": "Pastry - Carrot Muffin - Mini",
                    "image": "https://loremflickr.com/320/240",
                    "description": "cras pellentesque volutpat dui maecenas tristique est et tempus semper est"
                },
                {
                    "id": "4e094895-b5cb-43d0-93b7-c9498d02bfce",
                    "name": "Energy Drink Bawls",
                    "image": "https://loremflickr.com/320/240",
                    "description": "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris"
                },
                {
                    "id": "342722ed-bbdf-473c-8f5f-d70833fb0a56",
                    "name": "Shallots",
                    "image": "https://loremflickr.com/320/240",
                    "description": "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae"
                },
                {
                    "id": "e3c614a1-b495-432b-95e7-9ee5cc7c8a11",
                    "name": "Fennel - Seeds",
                    "image": "https://loremflickr.com/320/240",
                    "description": "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer"
                },
                {
                    "id": "a588fe40-8bcf-427b-a898-936c6b0bd32e",
                    "name": "Tomatoes - Diced, Canned",
                    "image": "https://loremflickr.com/320/240",
                    "description": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut"
                },
                {
                    "id": "a745181b-900a-473a-8335-926d8615162e",
                    "name": "Chicken - Whole Roasting",
                    "image": "https://loremflickr.com/320/240",
                    "description": "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"
                },
                {
                    "id": "70341375-594f-4a5f-8880-9f465b217cc0",
                    "name": "Lamb - Whole Head Off,nz",
                    "image": "https://loremflickr.com/320/240",
                    "description": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi"
                },
                {
                    "id": "685846d3-6b7d-4fd0-8531-aeb96042d095",
                    "name": "Bag - Clear 7 Lb",
                    "image": "https://loremflickr.com/320/240",
                    "description": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat"
                },
                {
                    "id": "92577ac0-39ff-4622-a8e2-34f46ca2cfae",
                    "name": "Apple - Northern Spy",
                    "image": "https://loremflickr.com/320/240",
                    "description": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at"
                },
                {
                    "id": "11b9d040-e76a-4c11-ba68-24ec1ae5f400",
                    "name": "Milk - Skim",
                    "image": "https://loremflickr.com/320/240",
                    "description": "odio in hac habitasse platea dictumst maecenas ut massa quis augue"
                },
                {
                    "id": "4dbf7b72-fe27-497d-8bd3-99258aebbfff",
                    "name": "Dried Cranberries",
                    "image": "https://loremflickr.com/320/240",
                    "description": "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit"
                },
                {
                    "id": "5ee31e45-7921-4d47-b017-0bf1685c1cac",
                    "name": "Red Snapper - Fillet, Skin On",
                    "image": "https://loremflickr.com/320/240",
                    "description": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl"
                },
                {
                    "id": "93ea2ed0-ea66-4848-a4cb-56b87d168b37",
                    "name": "Soup - Campbells Mushroom",
                    "image": "https://loremflickr.com/320/240",
                    "description": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes"
                },
                {
                    "id": "adc00b4d-de0b-478c-8a5f-60ec95903483",
                    "name": "Rice - Sushi",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy"
                },
                {
                    "id": "2a8cac23-77cf-4758-a166-321ad1197b5c",
                    "name": "Beer - Mcauslan Apricot",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra"
                },
                {
                    "id": "f761e3da-bc40-40a6-8512-bd8fee4433ba",
                    "name": "Rolled Oats",
                    "image": "https://loremflickr.com/320/240",
                    "description": "interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et"
                },
                {
                    "id": "02ad19a5-1183-4535-85f0-cbb5a51ef6c1",
                    "name": "Sobe - Green Tea",
                    "image": "https://loremflickr.com/320/240",
                    "description": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec"
                },
                {
                    "id": "32b658da-f255-469e-bf85-0e6a066f45c9",
                    "name": "Chicken - Breast, 5 - 7 Oz",
                    "image": "https://loremflickr.com/320/240",
                    "description": "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi"
                },
                {
                    "id": "ebe9dc21-36dd-48a6-85ec-0b69d5b52790",
                    "name": "Pepper - White, Whole",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in"
                },
                {
                    "id": "99d99b1b-d78c-4c8e-b830-ba74570ed349",
                    "name": "Soup Campbells - Tomato Bisque",
                    "image": "https://loremflickr.com/320/240",
                    "description": "ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim"
                }
            ]
        };
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <h1>Shop</h1>
                <Row>
                    {products.map(product =>
                        <Col sm='4' mb='4'>
                            <Card className="mb-5">
                                <CardImg src={product.image} />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button>Add to cart</Button>
                                </CardBody>
                            </Card>
                        </Col>)}
                </Row>

            </Container>
        );
    }
}

