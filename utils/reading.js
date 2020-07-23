export function calculateReadTime( words ) {
    const avgWordsPerMin = 250;
    const count = getWordCount( words );
    const time = Math.ceil(count / avgWordsPerMin);

    return `${time} min read`;
}

export function getWordCount( text ){
    return text.match(/\w+/g).length;
}