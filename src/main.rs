fn main() {
    let mut map1 = hashbrown::HashMap::new();
    map1.insert(1u8, String::from("abc"));
    map1.reserve(1000);
    let mut map2 = hashbrown::HashMap::new();
    map2.insert(1i16, String::from("abc"));
    map2.reserve(1000);
    let mut map3 = hashbrown::HashMap::new();
    map3.insert(3u16, String::from("abc"));
    map3.reserve(1000);
    let mut map4 = hashbrown::HashMap::new();
    map4.insert(3u64, "");
    map4.reserve(1000);
    dbg!((
        map1.iter().next(),
        map2.iter().next(),
        map3.iter().next(),
        map4.iter().next()
    ));
    dbg!((map1.clone(), map2.clone(), map3.clone(), map4.clone(),));
}
