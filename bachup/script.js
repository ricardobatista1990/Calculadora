function valor(v) {
        document.getElementById("display").value += v;
      }

      function limpar() {
        document.getElementById("display").value = "";
      }

      function apagar() {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
      }

      function calcular() {
        let display = document.getElementById("display");
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Erro";
        }
      }