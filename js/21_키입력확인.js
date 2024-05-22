  //화면에 존재하는 키들 모두 가져오기
        //  클래스로 적힌 모든 내용을 가져오겠다
        const 키들 = document.querySelectorAll(".key");



        document.addEventListener("keydown",function(e){
            // e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
            //e.key : 입력된 키를 확인

            let 숫자값저장; // 인덱스 값을 저장할 변수

            switch(e.key) {
                case 'q' : 숫자값저장 = 0;
                break;
                case 'w' : 숫자값저장 = 1;
                break;
                case 'e' : 숫자값저장 = 2;
                break;
                case 'r' : 숫자값저장 = 3;
                break;
                default :
                    return;
            }
            키들[숫자값저장].style.background = "pink";
            키들[숫자값저장].style.color = "black";
        });