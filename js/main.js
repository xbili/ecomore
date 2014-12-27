// Plastics description implementation

var LDPE = {
    name: 'Low Density Polyethylene',
    grades: ['Film', 'Purge', 'Part', 'Off-grade Resin']
};

var HDPE = {
    name: 'High Density Polyethylene',
    grades: ['Film', 'Purge', 'Part', 'Bottle', 'Off-grade Resin', 'Crate', 'Drum']
};

var PP = {
    name: 'Polypropylene',
    grades: ['Film', 'Sheet', 'Part', 'Spruce and Runner', 'Off-grade Resin', 'Corrugated Sheet', 'Caps', 'Supersacks']
};

var PET = {
    name: 'Polyethylene Terephthalate',
    grades: ['Film', 'Purge', 'Preform', 'Off-grade Resin', 'Botle', 'Strapping']
};

var ABS_PS = {
    name: 'Acrylonitrile Butadiene Styrene / Polystyrene',
    grades: ['Purge', 'Part', 'Spruce and Runner', 'Off-grade Resin', 'Computer Case']
};

var others = {
    name: 'We also purchase other general purpose and engineering grade plastic scraps.',
    grades: ['PVC', 'PC', 'PC/ABS', 'Acrylic', 'Nylon', 'Acetal']
};

var plastics = {
    LDPE: LDPE,
    HDPE: HDPE,
    PP: PP,
    PET: PET,
    ABS_PS: ABS_PS,
    Others: others
};

$(document).ready(function() {
    // fade in welcome message
    $('#welcome').fadeIn(3000);
    
    if ((screen.width >= 320 && screen.width <= 480) || 
        (screen.width >= 768 && screen.width < 1024)) {
        // if smartphone/tablet detected, none of the jQuery goodies will exist... sadly :(
    } else {
        // Bootstrap Scrollspy
        $('body').scrollspy({target: '#navbar'});

        // plastics cyclinders animation
        $('.plastic').click(function() {
            var self = $(this);
            var plastic_id = self.attr('id');
            var plastic_name = (self.text()).trim();

            $('#info').fadeOut(function() {
                $('.info-img').attr('id', plastic_id);
                $('.info-img').css('cursor', 'default');

                // ABS_PS is special because of slash present in name
                if (plastic_name === 'PS/ABS') {
                    $('#name').html(ABS_PS.name);
                    $('#grades').empty();
                    for (var i = 0; i < ABS_PS.grades.length; i++) {
                        $('#grades').append('<li>' + ABS_PS.grades[i] + '</li>');
                    }
                } else {
                    var target_plastic = plastics[plastic_name];
                    $('#name').html(target_plastic.name);
                    $('#grades').empty();
                    for (var i = 0; i < target_plastic.grades.length; i++) {
                        $('#grades').append('<li>' + target_plastic.grades[i] + '</li>');
                    }
                }
            });

            $('#plastics').css('padding-bottom', '0');
            $('#info').fadeIn();
        });

        // cross button on top left
        $('#back').click(function() {
            $('#info').fadeOut(function() {
                $('#plastics').css('padding-bottom', '300');
            });
        });
    }
});