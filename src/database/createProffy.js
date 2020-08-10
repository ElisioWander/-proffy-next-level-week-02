module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
    //insert data into proffy table
    const insertedProffy = await db.run (`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${ proffyValue.name },
            ${ proffyValue.avatar },
            ${ proffyValue.whatsapp },
            ${ proffyValue.bio }
        );

    `)

    const proffy_id = insertedProffy.lastID

    //insert data into class table
    const insertedClass = await db.run (`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            ${classValue.subject},
            ${classValue.cost},
            ${classValue.proffy_id}
        );

    `)

    const class_id = insertedClass.lastID

    //insert data into class_schedule
    const insertedSchedule 
}