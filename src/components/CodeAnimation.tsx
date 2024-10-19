import React, { useRef, useEffect, useCallback, useMemo } from 'react'

const CodeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const writtenCodeRef = useRef<string[]>([]) // Ref para el código escrito
  const currentLineRef = useRef<number>(0) // Ref para la línea actual
  const currentCharRef = useRef<number>(0) // Ref para el carácter actual
  const animationIdRef = useRef<number | null>(null) // Ref para almacenar el ID de la animación
  const lineHeight = 25 // Altura entre líneas
  const frameCountRef = useRef<number>(0)

  const codeLines = useMemo(
    () => [
        "const greeting: string = 'Hello, Recruiter!';",
        'function sayHello(): void {',
        '  console.log(greeting);',
        '}',
        'sayHello();',
        '// Output: Hello, Recruiter!',
        '',
        "const fewWords: string = 'Thanks for your interest!';",
        'function welcome(): void {',
        '  console.log(fewWords);',
        '}',
        'welcome();',
        '// Output: Thanks for your interest!',
      ],
    [],
  )

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.font = '18px monospace'
    ctx.fillStyle = '#6EE'

    // Dibujar cada línea de código escrita
    writtenCodeRef.current.forEach((line, index) => {
      ctx.fillText(line, 10, 50 + index * lineHeight) // Aseguramos un espacio adecuado entre líneas
    })
  }

  const animateCode = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      frameCountRef.current++
      if (frameCountRef.current % 8 === 0) {
        if (currentLineRef.current < codeLines.length) {
          if (
            currentCharRef.current < codeLines[currentLineRef.current].length
          ) {
            // Añadir el siguiente carácter a la línea escrita
            const updatedLine =
              (writtenCodeRef.current[currentLineRef.current] || '') +
              codeLines[currentLineRef.current][currentCharRef.current]
            writtenCodeRef.current[currentLineRef.current] = updatedLine
            currentCharRef.current++
          } else {
            // Terminar la línea actual e ir a la siguiente
            currentLineRef.current++
            currentCharRef.current = 0
            writtenCodeRef.current.push('') // Añadimos una nueva línea vacía para la siguiente
          }
          draw(ctx) // Actualizamos el canvas
        } else {
          // Si hemos terminado todas las líneas, detener la animación
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current)
          }
        }
      }
    },
    [codeLines],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    const animate = () => {
      animateCode(ctx)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    // Iniciar la animación al cargar el componente
    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [animateCode])

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="500"
        height="400"
        style={{ border: '2px solid #E69', backgroundColor: 'black' }}
      />
    </div>
  )
}

export default CodeAnimation
