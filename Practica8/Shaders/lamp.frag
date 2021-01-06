#version 330 core
out vec4 color;
in vec2 TexCoords;
uniform sampler2D diffuse;

void main()
{
    color = vec4(1.0f)*(texture(diffuse,TexCoords)); // Set all 4 vector values to 1.0f

}