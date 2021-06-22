import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  keyframes,
  group,

}
from '@angular/animations'

export const slideInAnimation =
trigger('routeAnimations', [
  transition('loginPage <=> signupPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width:'100%',
        opacity: 0,
        transform: 'scale(0) translateY()'
      }),
    ]),
    query(':enter', [
      animate('1000ms ease',
      style({
         opacity: 1,
         transform:'scale(1)'
        })
      ),
    ]),
  ]),
  ]);
  export const slider =
  trigger('routeAnimations',[
    transition('loginPage => signupPage', slideTo('right')),
    transition('signupPage => loginPage', slideTo('left')),

  ]);

  function slideTo(direction:any){
    console.log('animationn called')
    const optional = {optional:true};
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top:0,
          [direction]:0,
          width: '100%'
        })
      ], optional),
      query(':enter',[
        style({
          [direction]:'-100%'
        })
      ]),
      group([
        query(':leave',[
          animate('600ms ease', style({
            [direction]:'100%'
          }))
        ], optional),
        query(':enter',[
          animate('600ms ease', style({
            [direction]:'0%'
          }))
        ], optional),
      ]),
    ]
  }

  export const transformer =
  trigger('routeAnimations', [
    transition('loginPage => signupPage', transformTo({ x: -180, y: 0, rotate: 0 }) ),
    transition('signupPage => loginPage', transformTo({ x: 180, y: 0, rotate: 0 }) ),

]);


function transformTo({x = 100, y = 0, rotate = 0}) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
    ]),
    group([
      query(':leave', [
        animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
      ], optional),
      query(':enter', [
        animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
      ])
    ]),
  ];
}
