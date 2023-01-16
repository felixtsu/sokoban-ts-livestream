// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "级别2":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000002020202020000000000020304010200000000000202020202000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 2 2 2 2 . . . 
. . 2 . . . 2 . . . 
. . 2 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level1":
            case "级别1":return tiles.createTilemap(hex`0a000a0000000002020200000000000000020102000000000002020204020202000000020104030401020000000202020402020200000000000201020000000000000002020200000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . 2 2 2 . . . . 
. . . 2 . 2 . . . . 
. 2 2 2 . 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 2 2 . 2 2 2 . . 
. . . 2 . 2 . . . . 
. . . 2 2 2 . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a000a0000000000000000000000000202020000000000000002010202020202000000020101050505020000000205040404030200000002050505050202000000020202020202000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. 2 2 2 . . . . . . 
. 2 . 2 2 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . 2 2 . . 
. 2 2 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000003030300000000000000000003020300000303030303030303060300000302040505010606060300000306060303030303060300000306060300000003060300000306060300000003020300000303030300000003030300000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. 2 . . . . . . . . 2 . 
. 2 . . 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "infinityLevel":
            case "级别4":return tiles.createTilemap(hex`0a000a0001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2], TileScale.Sixteen);
            case "level2_back":
            case "level2":return tiles.createTilemap(hex`0a000a0000020202020202020000000205050105050200000002050504050502000000020104030401020000000205050405050200000002050501050502000000020202020202020000000000000000000000000000000000000000000000000000000000000000`, img`
. 2 2 2 2 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 . . . . . 2 . . 
. 2 2 2 2 2 2 2 . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "level8":
            case "level2-back1":return tiles.createTilemap(hex`0a000a0000000000000000000000000000000000000000000002020202020202000000020304040101020000000202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. 2 2 2 2 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 2 2 2 2 2 2 . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level10":
            case "level9":return tiles.createTilemap(hex`0a000a0000000000000000000000000000000000000000000001010101010101000000010203040505010000000101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. 2 2 2 2 2 2 2 . . 
. 2 . . . . . 2 . . 
. 2 2 2 2 2 2 2 . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile3,myTiles.tile11], TileScale.Sixteen);
            case "level4":
            case "级别3":return tiles.createTilemap(hex`0a000a0000000000000000000000000000000000030303000000000000000302030000030303030303060300000304050106060603000003030303030306030000000000000003060300000000000000030203000000000000000303030000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . 2 2 2 . 
. . . . . . 2 . 2 . 
. 2 2 2 2 2 2 . 2 . 
. 2 . . . . . . 2 . 
. 2 2 2 2 2 2 . 2 . 
. . . . . . 2 . 2 . 
. . . . . . 2 . 2 . 
. . . . . . 2 2 2 . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "level55":
            case "level5":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000003030300000000000000000003060300000303030303030303060300000302040501060606060300000306060303030303060300000306060300000003060300000306060300000003020300000303030300000003030300000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. 2 . . . . . . . . 2 . 
. 2 . . 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "SubBoxInLevel4":
            case "SubBoxInLevel1":return tiles.createTilemap(hex`0a000a0000000000000300000000000101010102010101000001010101020101010000010101010201010100000101010102010101000302020202020101010000010101020201010100000101010101010101000001010101010101010000000000000000000000`, img`
. . . . . . . . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. 2 2 2 2 . 2 . . . 
. . . . . . 2 . . . 
. 2 2 2 . . 2 . . . 
. . . 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile10,myTiles.tile12,myTiles.tile4], TileScale.Sixteen);
            case "SubBoxInLevel5":
            case "SubBoxInLevel2":return tiles.createTilemap(hex`0a000a0000000000000300000000000101010102010100000001010101020101000000010101010201010000000101010102010100000302020202020101000000010102020201010000000101010101010100000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. 2 2 2 2 . 2 . . . 
. . . . . . 2 . . . 
. 2 2 . . . 2 . . . 
. . 2 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile10,myTiles.tile12,myTiles.tile4], TileScale.Sixteen);
            case "subBoxLevel10":
            case "subBoxLevel1":return tiles.createTilemap(hex`0500050000000000000003030303040101020300030303030000000000`, img`
. . . . . 
. 2 2 2 2 
. . . . 2 
. 2 2 2 2 
. . . . . 
`, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile10,myTiles.tile4], TileScale.Sixteen);
            case "level12":
            case "level11":return tiles.createTilemap(hex`0a000a0000000000000000000000000000000000000000000000000000000000000000020202020202020200000205030401050502000002020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen);
            case "subBoxLevel12_2":
            case "subBoxLevel3":return tiles.createTilemap(hex`0500050000000000000404040400040201010304040404000000000000`, img`
. . . . . 
2 2 2 2 . 
2 . . . . 
2 2 2 2 . 
. . . . . 
`, [myTiles.transparency16,myTiles.tile11,myTiles.tile1,myTiles.tile4,myTiles.tile12], TileScale.Sixteen);
            case "subBoxLevel12_1":
            case "subBoxLevel2":return tiles.createTilemap(hex`0700070000000000000000000404040404000102020202040003020202020400010202020204000004040404040000000000000000`, img`
. . . . . . . 
. 2 2 2 2 2 . 
. . . . . 2 . 
. . . . . 2 . 
. . . . . 2 . 
. 2 2 2 2 2 . 
. . . . . . . 
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile11,myTiles.tile4,myTiles.tile13], TileScale.Sixteen);
            case "level14":
            case "subBoxLevel12_3":return tiles.createTilemap(hex`0700070000010104010100010202020202010102020202020104020503020204010202020202010102020202020100010104010100`, img`
. . . . . . . 
. . . . . . . 
. . . . . . . 
. . . 2 . . . 
. . . . . . . 
. . . . . . . 
. . . . . . . 
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile11,myTiles.tile10,myTiles.tile4,myTiles.tile7], TileScale.Sixteen);
            case "SubBoxLShape":
            case "级别5":return tiles.createTilemap(hex`0400040000020000030103000301010203030300`, img`
. . . . 
2 . 2 . 
2 . . . 
2 2 2 . 
`, [myTiles.transparency16,myTiles.tile12,myTiles.tile4,myTiles.tile13], TileScale.Sixteen);
            case "SubBoxLShapeLD":
            case "SubBoxLShape1":return tiles.createTilemap(hex`0400040000030303020101030003010300000200`, img`
. 2 2 2 
. . . 2 
. 2 . 2 
. . . . 
`, [myTiles.transparency16,myTiles.tile12,myTiles.tile4,myTiles.tile13], TileScale.Sixteen);
            case "level16":
            case "level13":return tiles.createTilemap(hex`0a000a0000000000000000000000000202020202020202020503030303030202020205030303030303030202050303030303030302020603030303030203020205030301030302040402050303020303020204020503030202020202020200050500000000000000`, img`
. . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 
. . . . . . 2 2 2 2 
. . . . . . . . 2 2 
. . . . . . . . 2 2 
. . . . . . 2 . 2 2 
. . . . . . 2 . . 2 
. . . 2 . . 2 2 . 2 
. . . 2 2 2 2 2 2 2 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile8,myTiles.tile6,myTiles.tile11,myTiles.tile1,myTiles.tile5,myTiles.tile4], TileScale.Sixteen);
            case "level7":
            case "level7":return tiles.createTilemap(hex`0c000a00000000000000000000000000000000000000000202020200000000000000000201010200000202020202020202040200060404030404040404040200000202040405040402040200000002040404040402040200000002020202020202010200000000000000000002020200000000000000000000000000`, img`
. . . . . . . . . . . . 
. . . . . . . 2 2 2 2 . 
. . . . . . . 2 . . 2 . 
. 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . 2 . 
. 2 2 . . . . . 2 . 2 . 
. . 2 . . . . . 2 . 2 . 
. . 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . 2 2 2 . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile11,myTiles.tile8,myTiles.tile4], TileScale.Sixteen);
            case "SubBoxInLevel7":
            case "SubBoxInLevel3":return tiles.createTilemap(hex`0a000a0000000000000300000000000101010102010100000001010101020101000000010101010201010000000101010202010100000302020202020101000000010101020201010000000101010102010100000001010101020101000000000000000300000000`, img`
. . . . . . . . . . 
. . . . 2 . 2 . . . 
. . . . 2 . 2 . . . 
. . . 2 2 . 2 . . . 
. 2 2 2 . . 2 . . . 
. . . . . . 2 . . . 
. 2 2 2 . . 2 . . . 
. . 2 2 2 . 2 . . . 
. . . 2 2 . 2 . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile10,myTiles.tile11,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "startTile":
            case "tile7":return tile7;
            case "subBoxTile":
            case "tile3":return tile3;
            case "edgeTile":
            case "tile5":return tile5;
            case "basicBoxNormal":
            case "tile8":return tile8;
            case "basicBoxInPlace":
            case "tile9":return tile9;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile0":
            case "tile12":return tile12;
            case "commonTile":
            case "tile11":return tile11;
            case "targetTile":
            case "tile1":return tile1;
            case "myTile":
            case "tile10":return tile10;
            case "myTile1":
            case "tile2":return tile2;
            case "edgeEntranceTile":
            case "tile4":return tile4;
            case "myTile2":
            case "tile13":return tile13;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
