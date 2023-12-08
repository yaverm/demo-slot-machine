import SlotModel from './mvc/model';
import SlotView from './mvc/view';
import SlotController from './mvc/controller';

document.addEventListener('DOMContentLoaded', () => {
    const app = new PIXI.Application({ width: 800, height: 600, background: '#1099bb' });
    document.body.appendChild(app.view);

    const slotModel = new SlotModel();
    const slotView = new SlotView(app, slotModel);
    const slotController = new SlotController(slotModel, slotView);

    slotView.controller = slotController;

    slotView.init();
    slotController.init();
});
