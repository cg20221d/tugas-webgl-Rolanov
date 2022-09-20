const main = () =>{
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");
    
    const buffer = gl.createBuffer();

    // vertex shader
    const vertexShaderCode = 
    `
    attribute vec2 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        gl_PointSize = 50.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
    }`
    const vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject); //sampai sini sudah menjadi .o

    // fragment shader
    const fragmenShaderCode = `
    precision mediump float;
    void main(){
        float r = 0.0;
        float g = 0.0;
        float b = 0.0;
        gl_FragColor = vec4(r, g, b, 1.0);
    }`
    const fragmenShaaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmenShaaderObject, fragmenShaderCode);
    gl.compileShader(fragmenShaaderObject); //sampai sini sudah menjadi .o

    // shader program
    const shaderProgram = gl.createProgram(); //(.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmenShaaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
    
    gl.clearColor(0.5, 0.5, 0.5, 0.8);
    //             R    G    B    A    Abu-abu
    gl.clear(gl.COLOR_BUFFER_BIT);
    const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
    
    
    //
    const draw = (vertices, start, end, glType) =>{        
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(aPosition);
        gl.drawArrays(glType, start, end);
    }
    // frame kotak
    const frame= [
        -0.9, 0.9,
        0.9, 0.9,
        0.9, -0.9,
        -0.9, -0.9
    ];
    draw(frame, 0, 4, gl.LINE_LOOP);
    // frame tebal
    const frame2 = [
        -0.9, 0.9,
        -0.8, 0.9,
        -0.9, 0.8,

        0.9, 0.9,
        0.9, 0.8,
        0.8, 0.9,

        0.9, -0.9,
        0.8, -0.9,
        0.9, -0.8,

        -0.9, -0.9,
        -0.9, -0.8,
        -0.8, -0.9,

        -0.9, 0.9,
        -0.8, 0.9,
        -0.9, 0.8,
    ];
    draw(frame2, 0, 15, gl.TRIANGLE_STRIP);
    // angka 1
    const number1 = [
        -0.4, 0.5,
        -0.3, 0.6,
        -0.2, 0.6,
        -0.2, 0.2,
        -0.1, 0.2,
        -0.1, 0.1,
        -0.4, 0.1,
        -0.4, 0.2,
        -0.3, 0.2,
        -0.3, 0.43,
        -0.4, 0.43
    ];
    draw(number1, 0, 11, gl.LINE_LOOP); 
    // angka 7
    const number7 = [
        0.1, 0.6,
        0.5, 0.6,
        0.5, 0.5,
        0.22, 0.1,
        0.1, 0.1,
        0.38, 0.5,
        0.1, 0.5
    ];
    draw(number7, 0, 7, gl.LINE_LOOP); 
    // huruf O
    const letterO =[
        -0.3, -0.1,
        -0.2, -0.1,
        -0.1, -0.2,

        -0.3, -0.1,
        -0.1, -0.2,
        -0.4, -0.2,

        -0.4, -0.2,
        -0.3, -0.2,
        -0.3, -0.5,

        -0.4, -0.5,
        -0.4, -0.2,
        -0.3, -0.5,

        -0.4, -0.5,
        -0.3, -0.6,
        -0.2, -0.6,

        -0.2, -0.6,
        -0.4, -0.5,
        -0.1, -0.5,

        -0.1, -0.5,
        -0.1, -0.2,
        -0.2, -0.2,
        
        -0.2, -0.2,
        -0.2, -0.5,
        -0.1, -0.5
    ];
    draw(letterO, 0, 24, gl.TRIANGLE_STRIP);
    // huruf R
    const letterR=[
        0.1, -0.1,
        0.2, -0.6,
        0.2, -0.1,

        0.2, -0.1,
        0.3, -0.1,
        0.4, -0.2,

        0.4, -0.2,
        0.2, -0.2,
        0.2, -0.1,

        0.3, -0.2,
        0.4, -0.2,
        0.3, -0.4,

        0.4, -0.2,
        0.4, -0.3,
        0.3, -0.4,

        0.4, -0.3,
        0.2, -0.4,
        0.2, -0.3,

        0.2, -0.4,
        0.2, -0.5,
        0.3, -0.5,

        0.2, -0.5,
        0.3, -0.5,
        0.3, -0.6,

        0.3, -0.5,
        0.3, -0.6,
        0.4, -0.6,

        0.2, -0.6,
        0.1, -0.6,
        0.1, -0.1,
    ];
    draw(letterR, 0, 30, gl.TRIANGLE_STRIP);
}