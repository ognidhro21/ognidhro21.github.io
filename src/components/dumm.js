function getSectionNGroup(givenid) {
  if (givenid.toString().length < 7) {
    return { error: true };
  }
  // forgive me for chaining if else if else if else if else
  // but it works, maybe probably, idonknow
  if (givenid <= 1901024 && givenid >= 1901001) {
    return { section: 0, group: 0 }; // S1 GA
  } else if (givenid <= 1901051 && givenid >= 1901025) {
    return { section: 0, group: 1 }; // S1 GB
  } else if (givenid <= 1901076 && givenid >= 1901052) {
    return { section: 0, group: 2 }; // S1 GC
  } else if (givenid <= 1901105 && givenid >= 1901077) {
    return { section: 1, group: 0 }; // S2 GD
  } else if (givenid <= 1901129 && givenid >= 1901106) {
    return { section: 1, group: 1 }; // S2 GE
  } else if (givenid <= 1901160 && givenid >= 1901130) {
    return { section: 1, group: 2 }; // S2 GF
  } else if (givenid <= 1901190 && givenid >= 1901161) {
    return { section: 2, group: 0 }; // S3 GG
  } else if (givenid <= 1901217 && givenid >= 1901191) {
    return { section: 2, group: 1 }; // S3 GH
  } else {
    return { section: 2, group: 2 }; // S3 GI
  }
}
