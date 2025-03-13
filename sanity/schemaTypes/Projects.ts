export default  {
    name:'Projects',
    title:'Projects',
    type:'document',
    fields: [
    {
        name:'heroimage',
        type:'image',
        title:'Hero Image'
    },
    {
        title: "Video file",
        name: "video",
        type: "mux.video"
      },
    {
        name:'titleinfo',
        type:'string',
        title:'Client' ,
    },
    {
        name:'type',
        type:'string',
        title:'Type of Work' ,
    },    
    {
        name:'services',
        type:'string',
        title:'Services' ,
    },
    {
        name:'slug',
        type:'slug',
        title:'Slug',

    },
    {
        name:'projectimages',
        title:'Project images and text',
        type:'array',
        of:[
            {
                type:'object',
                fields: [
                    {
                        name:'images',
                        title: 'Images',
                        type:'image',
                        options: {hotspot: true}
                    },
                    {
                    name: 'text',
                    title:'Text',
                    type:'array',
                    of:[{type:'string'}]

                    },
                    {
                        title: "Proj Video",
                        name: "projvideo",
                        type: "mux.video"
                      },
                ]
            }
            
        ]

    }
    ]
    
    };