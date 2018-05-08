import "jquery"

export default {
    $("button").on("click", ()=> {
        var element = `
        <tr>
            <td>Round 2</td>

            <td><input type="text" name="" value="1" class="score-box"></td>
            <td><input type="text" name="" value="1" class="score-box"></td>
            <td><input type="text" name="" value="1" class="score-box"></td>
            <td><input type="text" name="" value="1" class="score-box"></td>
        </tr>`;
        $("#table").append(element);
    })
}