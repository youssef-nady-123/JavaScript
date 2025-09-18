/*
    =========================
    == 006 var, let, const == 
    =========================
    var
        redclare (yes)
        access before declare (undefined)
        variable scope drama  (yes)

    let
        redclare (no => error)
        access before declare (error)
        variable scope drama  (no)      [does not written on window object]

    const
        redclare (no => error)
        access before declare (error)
        variable scope drama  (no)      [does not written on window object]
*/
var a = 1;
console.log(a);     // 1