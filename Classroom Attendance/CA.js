function getStuents(classroom){
    let {hasTeachingAssistant, classList} = classroom;
    if (hasTeachingAssistant) [teacher, assistant, ...students] = classList;
    if (!hasTeachingAssistant) [teacher, ...students] = classList;
    return students;
}

console.log(getStuents(
    {
        hasTeachingAssistant: true,
        classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
    }
))