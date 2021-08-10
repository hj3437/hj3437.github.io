const cardTag = document.querySelector('#project .content ol li');
const cardSelectorTags = cardTag.querySelectorAll('#project .content .history ul li p');
const cardDetailTag = cardTag.nextSibling.nextSibling;

const projectContents = {
    projects: [{
        name: "한국발도르프 영유아교육연대",
        url: "https://kaswece.org",
        date: "2021.07.05 ~ 2021.07.30",
        dateDetail: "1주차: 기관 협의, 2주차: 호스팅/CMS 결정 및 개발 진행, 3주차: 개발 진행, 4주차: 프로젝트 마무리",
        team: "4인 팀프로젝트",
        teamDetail: "• MS 팀즈, • 카카오톡 오픈채팅",
        area: "",
        areaDetail: "• Training(게시판), • 소식(게시판), • 게시판",
        contents: "",
        contentsDetail: "• 텍스트/갤러리 게시판 레이아웃 및 디자인 작업, • 5개의 게시판 작업후 14개 메뉴에 적용, • 게시판 목록 유튜브 썸네일 추가 기능"
    }]
};

cardSelectorTags.forEach((tag) => {
    if (tag.parentNode.classList.contains('work-date')) {
        let dateText = projectContents.projects[0].dateDetail;
        const displayText = changeProjectText("📅", dateText);

        addCardDetailContents(tag, cardDetailTag, displayText);
    } else if (tag.parentNode.classList.contains('work-team')) {
        let teamText = projectContents.projects[0].teamDetail;
        const displayText = changeProjectText("👨‍💻👩‍💻👨‍💻👩‍💻", teamText);

        addCardDetailContents(tag, cardDetailTag, displayText);
    } else if (tag.parentNode.classList.contains('work-responsible-area')) {
        let areaText = projectContents.projects[0].areaDetail;
        const displayText = changeProjectText("📌", areaText);

        addCardDetailContents(tag, cardDetailTag, displayText);
    } else if (tag.parentNode.classList.contains('work-contents')) {
        let contentsText = projectContents.projects[0].contentsDetail;
        const displayText = changeProjectText("✍️", contentsText);

        addCardDetailContents(tag, cardDetailTag, displayText);
    }
});

function changeProjectText(initText, spiltText) {
    const splitedText = spiltText.split(', ');
    let displayText = `\n${initText}\n`
    splitedText.forEach((text) => {
        displayText += text.trim() + "\n"
    })

    return displayText;
}

function newFunction(splitText) {
    splitText.forEach((text) => {
        text + "\n";
    });
}

function addCardDetailContents(tag, card, contents) {
    tag.addEventListener('mouseover', () => {
        card.style.display = 'block';

        // rest 
        card.querySelectorAll('p').forEach(pTag => {
            cardDetailTag.removeChild(pTag);
        })

        // add 
        var p = document.createElement("p");
        p.innerText = contents
        card.appendChild(p);
    });
}

cardDetailTag.addEventListener('mouseout', () => {
    cardDetailTag.style.display = 'none';

    isCardDetialCreate = false
});

