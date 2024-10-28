import React, { useRef, useEffect, useCallback, useMemo } from 'react'
import styles from '/src/styles/CodeAnimation.module.css'

const CodeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const writtenCodeRef = useRef<string[]>([]) 
  const currentLineRef = useRef<number>(0) 
  const currentCharRef = useRef<number>(0) 
  const animationIdRef = useRef<number | null>(null) 
  const lineHeight = 25 
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
      '// Output: I know you will call me! 😉 ',
    ],
    [],
  )

  const getWordColor = (word: string) => {
    if (/^(const|function|void|console)$/.test(word)) {
      return '#ee6699' 
    } else if (/^('Hello,|Recruiter!';|'Thanks|for|your|interest!';)$/.test(word)) {
      return '#000000' 
    } else if (/^(Hello,|Recruiter!|I|know|you|will|call|me!)$/.test(word)) {
      return '#fdea0d' 
    } else {
      return '#6EE' 
    }
  }

  const animateCode = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const draw = (ctx: CanvasRenderingContext2D) => { 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.font = '1.2rem monospace'

        writtenCodeRef.current.forEach((line, index) => {
          let xPosition = 10 
          const words = line.split(/(\s+)/) 

          words.forEach((word) => {
            ctx.fillStyle = getWordColor(word) 
            ctx.fillText(word, xPosition, 50 + index * lineHeight)
            xPosition += ctx.measureText(word).width 
          })
        })
      }

      frameCountRef.current++
      if (frameCountRef.current % 8 === 0) {
        if (currentLineRef.current < codeLines.length) {
          if (
            currentCharRef.current < codeLines[currentLineRef.current].length
          ) {
            const updatedLine =
              (writtenCodeRef.current[currentLineRef.current] || '') +
              codeLines[currentLineRef.current][currentCharRef.current]
            writtenCodeRef.current[currentLineRef.current] = updatedLine
            currentCharRef.current++
          } else {
            currentLineRef.current++
            currentCharRef.current = 0
            writtenCodeRef.current.push('') 
          }
          draw(ctx)
        } else {
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

    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [animateCode])

  return (
    <canvas
      className={styles.divCanvas}
      ref={canvasRef}
      width="600"
      height="400"
      style={{ backgroundColor: 'black', borderWidth: '20px', borderStyle: 'solid', borderColor: 'orange'  }}
    />
  )
}

export default CodeAnimation
