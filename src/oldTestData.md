const testObjArray = [0, 0, 0, 0, 0, 0, 0,];

testObjArray[0] && objects.push( //* Player
    new LiveUnit(
        { x: 40, y: 40 },
        { width: 130, height: 130 },
        0X000000,
        UnitDirection.Right,
        26,
        UnitMode.Walking,
        UnitType.Player
    ));

testObjArray[1] && objects.push( //* Enemy
    new LiveUnit(
        { x: 40, y: 390 },
        { width: 30, height: 30 },
        0X000000,
        UnitDirection.Left,
        20,
        UnitMode.Walking,
        UnitType.Enemy
    ));

testObjArray[2] && objects.push( //* Gold
    new StaticUnit(
        { x: 140, y: 390 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Gold
    )
);

testObjArray[3] && objects.push( //* Dirt
    new StaticUnit(
        { x: 140, y: 390 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Dirt
    )
);

testObjArray[4] && objects.push( //* Concrete
    new StaticUnit(
        { x: 140, y: 40 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Concrete
    )
);

testObjArray[5] && objects.push( //* Ladder
    new StaticUnit(
        { x: 140, y: 40 },
        { width: 30, height: 30 },
        0X000000,
        StaticObjectType.Ladder
    )
);

testObjArray[6] && objects.push( //* Rod
    new StaticUnit(
        { x: 140, y: 40 },
        { width: 3, height: 30 },
        0X000000,
        StaticObjectType.Rod
    )
);