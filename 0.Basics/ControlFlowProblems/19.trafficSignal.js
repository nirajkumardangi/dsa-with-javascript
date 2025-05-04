// Q19. Simulate traffic light behavior (Go, Slow, Stop)
function trafficSignal(color) {
  switch (color.toLowerCase()) {
    case 'green':
      return 'Go';
    case 'red':
      return 'Stop';
    case 'yellow':
      return 'Slow';
    default:
      return 'Invalid traffic color';
  }
}

console.log(trafficSignal('red')); // Stop
console.log(trafficSignal('yellow')); // Slow
console.log(trafficSignal('green')); // Go
console.log(trafficSignal('GREEN')); // Go
console.log(trafficSignal('orange')); // Invalid traffic color
