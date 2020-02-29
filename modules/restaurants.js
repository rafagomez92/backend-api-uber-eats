const restaurants = [    
    {
        zona: 'norte',        
        restaurantes:[          
          {
            id: 1,
            nombre: 'cueva',
            menu:[
              {
                platillo: 'carne asada',
                costo: '100'
              },
              {
                platillo: 'parrillada',
                costo: '150'
              }
            ]
          },
          {
            id: 2,
            nombre: 'tacoloco',
            menu:[
              {
                platillo: 'Taco al pastor',
                costo: '20'
              },
              {
                platillo: 'Taco de asada',
                costo: '20'
              }
            ]
          }
        ]
        },
        {          
            zona: 'sur',
            restaurantes:[          
              {
                id: 3,
                nombre: 'marvin',
                menu:[
                  {
                    platillo: 'Cocktel camarón',
                    costo: '80'
                  },
                  {
                    platillo: 'Pescado frito',
                    costo: '100'
                  }
                ]
              },
              {
                id: 4,
                nombre: 'bucanero',
                menu:[
                  {
                    platillo: 'Camarón empanizado',
                    costo: '90'
                  },
                  {
                    platillo: 'Caldo de camarón',
                    costo: '70'
                  }
                ]
              }
            ]
            },
            {
                zona: 'oriente',
                restaurantes:[          
                  {
                    id: 5,
                    nombre: 'tamarindos',
                    menu:[
                      {
                        platillo: 'tacos de barbacoa',
                        costo: '15'
                      },
                      {
                        platillo: 'Tacos de puerco',
                        costo: '15'
                      }
                    ]
                  },
                  {
                    id: 6,
                    nombre: 'jaguar',
                    menu:[
                      {
                        platillo: 'Quesadillas',
                        costo: '30'
                      },
                      {
                        platillo: 'Burritos',
                        costo: '25'
                      }
                    ]
                  }
                ]
                },
                {
                    zona: 'poniente',
                    restaurantes:[          
                      {
                        id: 7,
                        nombre: 'potrillos',
                        menu:[
                          {
                            platillo: 'Ensaladas',
                            costo: '80'
                          },
                          {
                            platillo: 'Hamburguesa',
                            costo: '50'
                          }
                        ]
                      },
                      {
                        id: 8,
                        nombre: 'perrera',
                        menu:[
                          {
                            platillo: 'Hamburguesa',
                            costo: '50'
                          },
                          {
                            platillo: 'Hotdogs',
                            costo: '30'
                          }
                        ]
                      }
                    ]
                    }
]

export default restaurants;